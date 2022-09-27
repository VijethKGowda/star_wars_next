import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../components/Button'

describe('Home', () => {
  it('testing the card component props', () => {
    render(
      <Button className="rounded-md w-full" onClick={() => { console.log("button test") }} disable={false}>
        Button text
      </Button>
    )
    expect(screen.getByText("Button text")).toBeInTheDocument();
  })
})