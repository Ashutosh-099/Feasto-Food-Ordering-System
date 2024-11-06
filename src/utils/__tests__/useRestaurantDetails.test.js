import { renderHook, waitFor } from "@testing-library/react";
import { useRestaurantDetails } from "../useRestaurantDetails";
import RestaurantMockDetails from "./mocks/restaurantDetails.json";

describe("Validate useRestaurantDetails", () => {

    beforeAll(() => {
        // Mock fetch function
        global.fetch = jest.fn(() => {
            return Promise.resolve({
                ok: true,
                json: () => {
                    return Promise.resolve(RestaurantMockDetails);
                }
            })
        });
    });

    it("Should response 200 and return restaurant data", async () => {
        const { result } = renderHook(() => useRestaurantDetails());

        // Wait for data to load and verify that the hook returns the correct data
        // Need to change
        await waitFor(() => {
            expect(result.current).toEqual(RestaurantMockDetails.data.cards);
        });
    });

    afterAll(() => {
        jest.clearAllMocks();
    });
    
})