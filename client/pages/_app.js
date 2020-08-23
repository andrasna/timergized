import '../styles/globals.css'
import theme from '../utils/theme'
const {colors} = theme

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />

      <style jsx global>{`
        html {
          color: ${colors.white};
          background: linear-gradient(to right, ${colors.royalBlue}, ${colors.wisteria});
        }
      `}</style>
    </>
  )
}

export default MyApp
