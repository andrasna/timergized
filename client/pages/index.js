import Head from 'next/head'
import Navbar from '../components/navbar'
import Alert from '../components/alert'
import theme from '../utils/theme'

const {colors} = theme

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Alert theme={colors.red}>Error</Alert>
      <Alert theme={colors.green}>Success</Alert>

      <main>
        <h1>
          Home
        </h1>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet malesuada turpis. Vivamus gravida vehicula erat vitae consectetur. Nam ultricies suscipit eros, vel maximus nulla mollis non. Cras sit amet urna est. Donec interdum quis mauris sit amet rutrum. 
        </p>
      </main>
    </div>
  )
}
