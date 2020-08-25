import Head from 'next/head'
import Wrapper from '../components/wrapper'
import Header from '../components/header'
import Lorem from '../components/lorem'

const Teams = () => {
  return (
    <Wrapper type="lg">
      <Head>
        <title>Timergized</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Lorem>
        <h1>Teams</h1>
      </Lorem>

    </Wrapper>
  )
}

export default Teams
