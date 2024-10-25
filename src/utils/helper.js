export const getDishURL = (url) => {
    // Extract collection_id
    const collectionIdMatch = url.match(/collection_id=([^&]*)/);
    const collectionId = collectionIdMatch ? collectionIdMatch[1] : null;

    // Extract tags
    const tagsMatch = url.match(/tags=([^&]*)/);
    const tags = tagsMatch ? tagsMatch[1] : null;

    return collectionId + "/" + tags
}