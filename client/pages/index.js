import Head from 'next/head'
import Wrapper from '../components/wrapper'
import Navbar from '../components/navbar'
import theme from '../utils/theme'
const {width} = theme

const Home = () => {
  return (
    <Wrapper theme={width.lg}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1>
          Home
        </h1>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet malesuada turpis. Vivamus gravida vehicula erat vitae consectetur. Nam ultricies suscipit eros, vel maximus nulla mollis non. Cras sit amet urna est. Donec interdum quis mauris sit amet rutrum. 
        </p>
      </main>
    </Wrapper>
  )
}

export default Home
