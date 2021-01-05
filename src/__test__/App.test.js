import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test('renders learn react link', () => {
  render(<App />)
  const increaseBtn = screen.getByText(/increase/i) // regex
  const decreaseBtn = screen.getByText('Decrease') // string

  const counter = screen.getByText(0)

  userEvent.click(increaseBtn)
  expect(counter).toHaveTextContent(1)

  userEvent.click(decreaseBtn)
  expect(counter).toHaveTextContent(0)
})
