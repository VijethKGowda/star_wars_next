import { render, screen, waitFor } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

describe('Home', () => {
  it('renders a heading from the main page', async () => {
    render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>)
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })
})