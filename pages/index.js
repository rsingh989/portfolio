import Head from 'next/head';
import Image from 'next/image';

// Importing Components
import Navbar from '@/components/Navbar';

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
      </main>
    </>
  );
}
