import { render, screen } from '@testing-library/react'
import Card from '../components/Card'
import '@testing-library/jest-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <Card id={1} item={{ name: "Luke Skywalker", birth_year: "19BBY", films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/"] }} />
    )
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("19BBY")).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
  })
})