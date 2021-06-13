import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react'
import Huaiyans from '../components/kingdoms/Huaiyans'

export default function Home() {

  const [kingdom, setKingdom] = useState('Huaiyans');

  const isActive = kgdm => {
    if(kgdm === kingdom){
        return {border: '3px solid white', transform: "scale(1.05)"}
    } else {
        return {border: 'none'}
    }
}
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="Kingdoms are waiting for the war." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.kingdoms}>
          <div className={styles.kingdomfirst} style={isActive('Huaiyans')} onClick={() => setKingdom('Huaiyans')}>
            <h1>Huaiyans</h1>
          </div>
          <div className={styles.kingdomsecond} style={isActive('Greaies')} onClick={() => setKingdom('Greaies')}>
            <h1>Greaies</h1>
          </div>
          <div className={styles.kingdomthird} style={isActive('Yalvians')} onClick={() => setKingdom('Yalvians')}>
            <h1>Yalvians</h1>
          </div>
        </div>

        <div className={styles.kingdom}>
          <Huaiyans />
        </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
