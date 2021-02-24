import { CompletedChalenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import Head from 'next/head'

import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Healthy Pomodoro</title>
      </Head>

      <ExperienceBar />

      <section>
        <div className={styles.container}>
          <Profile />
          <CompletedChalenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
