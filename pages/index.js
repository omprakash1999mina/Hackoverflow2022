import Head from 'next/head'
import AnchorNavbar from '../Components/AnchorNavbar';
import React from 'react';
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
      
    </div>
  )
}
