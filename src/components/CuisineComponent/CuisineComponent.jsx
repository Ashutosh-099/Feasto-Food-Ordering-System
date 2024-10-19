import { Skeleton } from "@mui/material";
import { CUISINE_IMG_URL } from "../../utils/common";

const CuisineComponent = (props) => {

    const { resData } = props;

    return (
        <div id="cuisine-container" className="mx-24">
            {resData ? (
                <>
                    <p className="p-4 text-[1.6rem] font-bold">Any cuisines you like?</p>
                    <div id="cuisine-card" className="flex p-4 overflow-x-auto">
                        {resData?.card?.card?.imageGridCards?.info.map(cuisine => (
                            <img key={cuisine.id} src={CUISINE_IMG_URL + cuisine.imageId} alt="cuisine-card" className="w-40 mx-4" />
                        ))}

                    </div>
                </>
            ) : (
                <>
                    <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} animation="wave" width={340} className="p-4" />
                    <div className="flex p-4 flex-wrap">
                        <Skeleton variant="rectangular" animation="wave" width={180} height={180} className="mx-4" />
                        <Skeleton variant="rectangular" animation="wave" width={180} height={180} className="mx-4" />
                        <Skeleton variant="rectangular" animation="wave" width={180} height={180} className="mx-4" />
                        <Skeleton variant="rectangular" animation="wave" width={180} height={180} className="mx-4" />
                        <Skeleton variant="rectangular" animation="wave" width={180} height={180} className="mx-4" />
                        <Skeleton variant="rectangular" animation="wave" width={180} height={180} className="mx-4" />
                    </div>
                </>
            )}

        </div>
    );
}

export default CuisineComponent;