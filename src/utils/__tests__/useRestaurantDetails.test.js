import { renderHook, waitFor } from "@testing-library/react";
import { useRestaurantDetails } from "../useRestaurantDetails";

const mockData = {
    data: {
        cards: [
            { id: 1, name: "Restaurant 1" },
            { id: 2, name: "Restaurant 2" }
        ]
    }
};

describe("Validate useRestaurantDetails", () => {

    beforeAll(() => {
        // Mock fetch function
        global.fetch = jest.fn(() => {
            return Promise.resolve({
                ok: true,
                json: () => {
                    return Promise.resolve(mockData);
                }
            })
        });
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it("Should response 200 and return restaurant data", async () => {
        const { result } = renderHook(() => useRestaurantDetails());

        // Wait for data to load and verify that the hook returns the correct data
        // Need to change
        await waitFor(() => {
            expect(result.current).toEqual(mockData.data.cards);
        });
    });
    
})