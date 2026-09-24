"use client";

import { useEffect, useRef } from "react";

// Dégradé granuleux animé (WebGL). Bandes concentriques déformées par du bruit,
// grain façon pellicule recalculé à chaque image.

const vertex = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`;

const fragment = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}

// Rampe de 4 couleurs en aller-retour (pas de cassure entre la dernière et la première)
uniform vec3 uC0;
uniform vec3 uC1;
uniform vec3 uC2;
uniform vec3 uC3;

vec3 ramp(float t) {
  t = fract(t) * 6.0;
  if (t < 1.0) return mix(uC0, uC1, smoothstep(0.0, 1.0, t));
  if (t < 2.0) return mix(uC1, uC2, smoothstep(1.0, 2.0, t));
  if (t < 3.0) return mix(uC2, uC3, smoothstep(2.0, 3.0, t));
  if (t < 4.0) return mix(uC3, uC2, smoothstep(3.0, 4.0, t));
  if (t < 5.0) return mix(uC2, uC1, smoothstep(4.0, 5.0, t));
  return mix(uC1, uC0, smoothstep(5.0, 6.0, t));
}

// Bulle translucide : remplissage très léger + reflet sur le bord
float bubble(vec2 p, vec2 c, float r, out float rim) {
  float d = length(p - c) / r;
  rim = smoothstep(0.78, 0.97, d) * smoothstep(1.03, 0.97, d);
  return smoothstep(1.0, 0.55, d);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = uv;
  p.x *= aspect;

  // Ondes concentriques autour d'un centre hors écran (bas gauche), qui suit un peu la souris
  vec2 center = vec2(-0.1, -0.35) + (uMouse - 0.5) * 0.12;
  float d = length(p - center);
  d += (fbm(p * 1.3 + vec2(uTime * 0.03, -uTime * 0.025)) - 0.5) * 0.1;

  // Fond : larges bandes de couleur qui s'éloignent doucement du centre
  vec3 col = ramp(d * 0.5 - uTime * 0.012);

  // Houle : légères variations de lumière le long des ondes
  float swell = sin(d * 10.0 - uTime * 0.35);
  col *= 0.965 + 0.045 * swell;

  // Fins reflets lumineux sur certaines ondes
  float ripple = sin(d * 26.0 - uTime * 0.7) * 0.5 + 0.5;
  float fade = smoothstep(0.4, 1.4, d);
  col = mix(col, vec3(1.0), smoothstep(0.93, 1.0, ripple) * 0.14 * fade);

  // Bulles qui montent lentement
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    float r = 0.06 + 0.07 * fract(fi * 0.618);
    float y = fract(fi * 0.37 + uTime * (0.012 + 0.006 * fract(fi * 0.43))) * (1.0 + 4.0 * r) - 2.0 * r;
    float x = (0.12 + fract(fi * 0.271 + 0.3) * 0.8) * aspect + sin(uTime * 0.2 + fi * 2.1) * 0.03;
    float rim;
    float b = bubble(p, vec2(x, y), r, rim);
    col = mix(col, ramp(d * 0.5 + 0.35 - uTime * 0.012), b * 0.22);
    col += rim * 0.1;
  }

  // Grain fin, au pixel près
  float g = hash(gl_FragCoord.xy + fract(uTime * 7.0) * 100.0);
  col += (g - 0.5) * 0.075;

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function GrainGradient({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || getComputedStyle(canvas).display === "none") return;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertex));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    // Couleurs lues depuis la palette CSS (--g1 à --g4, en hexadécimal)
    const css = getComputedStyle(document.documentElement);
    ["uC0", "uC1", "uC2", "uC3"].forEach((name, i) => {
      const hex = css.getPropertyValue(`--g${i + 1}`).trim() || "#ffffff";
      const n = parseInt(hex.slice(1), 16);
      gl.uniform3f(gl.getUniformLocation(prog, name), ((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
    });

    // Rendu à 1 pixel de canevas par pixel CSS : grain fin sans surcoût des écrans haute densité
    const scale = 1;
    const resize = () => {
      canvas.width = Math.max(1, Math.floor(canvas.clientWidth * scale));
      canvas.height = Math.max(1, Math.floor(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onMove);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    let raf = 0;
    const start = performance.now();
    const draw = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      gl.uniform1f(uTime, reduce ? 0 : (performance.now() - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    const loop = () => {
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    };
    if (reduce) draw();
    else loop();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
