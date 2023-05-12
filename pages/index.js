import Head from 'next/head';
import Image from 'next/image';

// Importing Components
import Navbar from '@/components/Navbar';
import Spacer from '@/components/Spacer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rags | Product Designer & Frontend Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Raghavendra, a Product Designer and Frontend Developer."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="assets/favicon.svg" />
      </Head>
      <main>
        <Navbar />
        <Spacer />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
