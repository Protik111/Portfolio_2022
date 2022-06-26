import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Protik The Dev!</title>
        <meta name="description" content="Protik The Developer!" />
        <link rel="icon" href="/bracket.png" />
      </Head>

      <main className={styles.main}>
        Protik, The Dev!
      </main>
    </div>
  )
}
