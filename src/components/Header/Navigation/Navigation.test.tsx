import {screen, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import Navigation from "."


test("should render a link with the provided name and href", () => {
    render(<Navigation name="name" link="href"/>)

    const link = screen.getByRole("link", {name: /name/i})
    expect(link).toBeInTheDocument()
})