import Head from 'next/head'
import Navbar from '../components/navbar'
import Wrapper from '../components/wrapper'
import theme from '../utils/theme'
const {width} = theme

const Reports = () => {
  return (
    <Wrapper theme={width.lg}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1>
          Reports
        </h1>

        <p>
        Donec a arcu nisl. Vestibulum tortor enim, tempor vitae blandit nec, molestie nec nunc. Fusce fringilla accumsan aliquam. Sed pretium finibus urna, et placerat ex malesuada et. Integer tempus nisl eu turpis venenatis, a tempus massa pretium. Donec fermentum risus a tellus pulvinar scelerisque. Fusce accumsan nibh in imperdiet dignissim. In hendrerit eu risus vitae semper. Pellentesque auctor purus neque, et scelerisque elit fermentum sed. Nunc sit amet dignissim metus. Cras sit amet urna est. Donec interdum quis mauris sit amet rutrum. 
        </p>
      </main>
    </Wrapper>
  )
}

export default Reports