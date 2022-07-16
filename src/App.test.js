import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders watch react link", () => {
	render(<App />)
	const linkElement = screen.getByText(/Watch Video/i)
	expect(linkElement).toBeInTheDocument()
})
