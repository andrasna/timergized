import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Settings() {
  return (
    <div className={styles.inner}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Settings
        </h1>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet malesuada turpis. Vivamus gravida vehicula erat vitae consectetur. Nam ultricies suscipit eros, vel maximus nulla mollis non. Donec a arcu nisl. Vestibulum tortor enim, tempor vitae blandit nec, molestie nec nunc. Fusce fringilla accumsan aliquam. Sed pretium finibus urna, et placerat ex malesuada et. Integer tempus nisl eu turpis venenatis, a tempus massa pretium. Donec fermentum risus a tellus pulvinar scelerisque. Fusce accumsan nibh in imperdiet dignissim. In hendrerit eu risus vitae semper. Pellentesque auctor purus neque, et scelerisque elit fermentum sed. Nunc sit amet dignissim metus. Cras sit amet urna est. Donec interdum quis mauris sit amet rutrum. 
        </p>
      </main>
    </div>
  )
}
