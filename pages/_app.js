import '../styles/globals.css'
import '../styles/ssr.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
