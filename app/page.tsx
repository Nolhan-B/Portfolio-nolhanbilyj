import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Projects42 from "@/components/site/Projects42";
import ProjectsPro from "@/components/site/ProjectsPro";
import Stack from "@/components/site/Stack";
import Contact from "@/components/site/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects42 />
        <ProjectsPro />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
