import { useCuisineDetails } from "../../utils/useCuisineDetails";
import { useParams } from "react-router-dom";
const CuisineCollection = () => {
    const { collectionId, tag } = useParams();
    const resList = useCuisineDetails(collectionId, tag);

    return (
        <p>Hello</p>
    );
}

export default CuisineCollection;