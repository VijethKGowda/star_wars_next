import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Character from '../pages/character'

const queryClient = new QueryClient()

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: 1 },
  }),
}));

describe('Home', () => {
  it('checking thw working of single character page', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Character />
      </QueryClientProvider>
    )
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText("Luke Skywalker")).toBeInTheDocument(), {
      timeout: 4000,
    });
  })
})