import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return <>
    <QueryClientProvider client={queryClient}>
      <div className='font-source-code w-full h-screen overflow-auto bg-black'>
        <Navbar />
        <main className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12'>
          <Component {...pageProps} />
        </main>
      </div>
    </QueryClientProvider>
  </>
}

export default MyApp
