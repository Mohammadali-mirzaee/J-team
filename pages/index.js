import Head from 'next/head';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Header />

      <Main />
      <Footer data-aos={'fade-right'} />
    </div>
  );
}
