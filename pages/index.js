import React from 'react';
import Head from 'next/head'
import AnchorNavbar from '../Components/AnchorNavbar';
import TopSection from '../Components/TopSection';
import Easy from '../Components/Easy';
import Hard from '../Components/Hard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [difficulty, setDifficulty] = React.useState('easy');
  const [success, setSuccess] = React.useState(null);
  const [reset, setReset] = React.useState(false);
  const [currentColorIndex, setCurrentColorIndex] = React.useState();
  const [colorsArray, setColorsArray] = React.useState([]);

  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  }

  React.useEffect(() => {

    if (difficulty === 'hard') {
      const random = Math.floor((Math.random() * 5) + 0);
      setCurrentColorIndex(random)
    } else {
      const random = Math.floor((Math.random() * 2) + 0);
      setCurrentColorIndex(random)
    }

    let colors = [];
    for (let index = 0; index < 6; index++) {
      colors.push(random_rgba())
    }
    setColorsArray(colors);
    setSuccess(false);

  }, [difficulty, reset]);


  return (
    <div >
      <Head>
        <title>Hackoverflow 2022</title>
        <meta name="description" content="This website created by Genius mind team ." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopSection state={{ currentColorIndex, colorsArray, success }} />

      <AnchorNavbar state={{ setDifficulty, setReset, difficulty, success, reset }} />

      <div className={styles.lowerSection}>

        {difficulty === 'easy' ? <Easy state={{ currentColorIndex, colorsArray, success, setSuccess }} /> : <Hard state={{ currentColorIndex, colorsArray, success, setSuccess }} />}

      </div>
    </div>
  )
}
