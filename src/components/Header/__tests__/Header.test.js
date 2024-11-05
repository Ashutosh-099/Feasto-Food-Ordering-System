import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store/store";
import Header from "../Header"

describe("Header component verification", () => {
    beforeEach(() => {
        // Rendering before each test cases
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>
        );
    });

    // One more way to create test cases is using "it"
    it("Should render Header component at top along with logo", () => {
        // Querying
        // Find logo in the header
        const logoWithLink = screen.getByTestId("logo-link");
        const logoImage = screen.getByRole("img");
        const logoName = screen.getByTestId("logo-name");
        // Assertion
        expect(logoWithLink).toBeInTheDocument();   // The whole logo should be in DOM
        expect(logoWithLink).toContainElement(logoImage);   // Logo container contains logo image
        expect(logoWithLink).toContainElement(logoName);    // Logo container contains logo name
        expect(logoName).toHaveTextContent("Feasto");       // Logo name value would be "Feasto"
    });

    it("Should render navigation with its options", () => {
        // Querying
        const navigationContainer = screen.getByRole("navigation");

        // Assertion
        expect(navigationContainer).toBeInTheDocument();
        expect(navigationContainer.children).toHaveLength(3);
        
        // Querying each children
        const homeLink = navigationContainer.children[0];
        const aboutUsLink = navigationContainer.children[1];
        const profileLink = navigationContainer.children[2];

        // Assert each children
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveTextContent("Home");
        expect(homeLink).toHaveAttribute("href", "/");
        expect(aboutUsLink).toBeInTheDocument();
        expect(aboutUsLink).toHaveTextContent("About Us");
        expect(aboutUsLink).toHaveAttribute("href", "/about-us");
        expect(profileLink).toBeInTheDocument();
        expect(profileLink).toHaveTextContent("Profile");
        expect(profileLink).toHaveAttribute("href", "https://ashutoshagaarwal.vercel.app/");
    });

    it("Should render Cart component inside Header component", () => {
        // Querying
        const cartLink = screen.getByTestId("cart-link");
        expect(cartLink).toHaveAttribute("href", "/cart");
    });
})