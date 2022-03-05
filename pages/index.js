import React from 'react';
import Head from 'next/head'
import AnchorNavbar from '../Components/AnchorNavbar';
import TopSection from '../Components/TopSection';
import Easy from '../Components/Easy';
import Hard from '../Components/Hard';
import styles from '../styles/Home.module.css';
import FireworksIllustration from '../Components/FireworksIllustration';

export default function Home() {
  const [difficulty, setDifficulty] = React.useState('easy');
  const [success, setSuccess] = React.useState(null);
  const [reset, setReset] = React.useState(false);
  const [currentColorIndex, setCurrentColorIndex] = React.useState();
  const [colorsArray, setColorsArray] = React.useState([]);
  const [attempts, setAttempts] = React.useState(0);

  // function for random colors
  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
  }

  React.useEffect(() => {
    if (difficulty === 'hard') {
      // choosing a index between 0 to 5 for hard
      const random = Math.floor((Math.random() * 5) + 0);
      setCurrentColorIndex(random)
    } else {
      // choosing a index between 0 to 2 for easy
      const random = Math.floor((Math.random() * 2) + 0);
      setCurrentColorIndex(random)
    }

    let colors = [];
    //making a 6 element array 
    for (let index = 0; index < 6; index++) {
      colors.push(random_rgba())
    }
    setColorsArray(colors);
    setSuccess(null);
    setAttempts(0);

  }, [difficulty, reset]);
  // useEffect rerender the dom when difficulty and reset changes 

  return (
    <div className={styles.mainContainer} >
      {success && <FireworksIllustration />}
      <Head>
        <title>Hackoverflow 2022</title>
        <meta name="description" content="This website created by Genius mind team ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopSection state={{ currentColorIndex, colorsArray, success, attempts }} />

      <AnchorNavbar state={{ setDifficulty, setReset, difficulty, success, reset }} />

      {/* if difficulty level is easy show easy Component otherwise show hard Component */}
      {difficulty === 'easy' ? <Easy state={{ attempts, currentColorIndex, colorsArray, success, setSuccess, setAttempts }} /> : <Hard state={{ attempts, currentColorIndex, colorsArray, success, setSuccess, setAttempts }} />}

    </div>
  )
}
