import '@/styles/globals.css'
import { AppProvider } from '@/data/context/AppContext'
import { LocalStorageProvider } from '@/data/context/LocalStorageContext'

export default function App({ Component, pageProps }) {
  return(
    <LocalStorageProvider>
      return <Component {...pageProps} />
    </LocalStorageProvider>
  )
}
