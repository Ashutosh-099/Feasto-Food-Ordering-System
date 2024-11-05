import { getDishURL } from "../helper";

test("Should validate getDishUrl and return Collection ID and Tags", () => {
    const url = "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza";
    const result = getDishURL(url);
    
    expect(result).toBe("83631/layout_CCS_Pizza");
});

test("Should return null if both the values are missing", () => {
    const url = "swiggy://collectionV2?&search_context=pizza";
    const result = getDishURL(url);
    
    expect(result).toBe("null/null")
});

test("Should only return collection if tags is missing", () => {
    const url = "swiggy://collectionV2?collection_id=83631&search_context=pizza";
    const result = getDishURL(url);
    
    expect(result).toBe("83631/null")
});

test("Should only return tags if collection is missing", () => {
    const url = "swiggy://collectionV2?tags=layout_CCS_Pizza&search_context=pizza";
    const result = getDishURL(url);
    
    expect(result).toBe("null/layout_CCS_Pizza")
});