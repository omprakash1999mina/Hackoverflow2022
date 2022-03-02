import React from 'react';
import Head from 'next/head'
import AnchorNavbar from '../Components/AnchorNavbar';
import TopSection from '../Components/TopSection';
import { useDispatch } from "react-redux";
import {setColor} from '../reduxState/Colours/colorSlice';
export default function Home() {
  const dispatch = useDispatch();

  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  }

  React.useEffect(()=>{
    let colorsArray = [];

    for (let index = 0; index < 6; index++) {
      colorsArray.push(random_rgba())  
    }

    dispatch(setColor(colorsArray));
  },[])
  
  // Math.floor((Math.random() * 10) + 1);

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
