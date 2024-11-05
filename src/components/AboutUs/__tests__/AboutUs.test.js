import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutUs from "../AboutUs";

describe("About us component", () => {
    test("should render About Us Page with Heading component", () => {
        // Rendering
        render(<AboutUs />);

        // Querying
        const heading = screen.getByRole("heading");
        
        // Assertion
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("About Feasto");
    });

    test("Should render first description in paragraph", () => {
        // Rendering
        render(<AboutUs />);

        // Querying
        const description1 = screen.getByTestId("description1");

        // Assertion
        expect(description1).toBeInTheDocument();
        expect(description1).toHaveTextContent("Feasto is a template of food ordering system, we leverage the Swiggy data to render the food items, which dictates the implementation of Industrial Design principles.");
    });

    test("Should render second description in paragraph element", () => {
        // Rendering
        render(<AboutUs />);

        // Querying
        const description2 = screen.getByTestId("description2");

        // Assertion
        expect(description2).toBeInTheDocument();
        expect(description2).toHaveTextContent("Thank you🙏! for showing interest in the application. Feel free to connect with developer of this application by going to 'Profile section'.");
    })
});
