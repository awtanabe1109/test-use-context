import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <ComponentA/>
      </div>
    </main>
  )
}
