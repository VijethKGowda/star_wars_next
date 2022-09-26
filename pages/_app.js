import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
}

export default MyApp
