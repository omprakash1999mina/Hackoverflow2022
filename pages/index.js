import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AnchorNavbar from '../Components/AnchorNavbar';
import React from 'react';
import LowerSection from '../Components/LowerSection';
import TopSection from '../Components/TopSection';

export default function Home() {


  return (
    <div >
      <Head>
        <title>Hackoverflow 2022</title>
        <meta name="description" content="This website created by Genius mind team ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopSection />
      
      <AnchorNavbar />
      
      {/* <LowerSection /> */}

    </div>
  )
}
