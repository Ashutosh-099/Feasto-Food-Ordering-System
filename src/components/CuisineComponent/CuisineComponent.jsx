import { ImageList, ImageListItem, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { CUISINE_IMG_URL } from "../../utils/common";
import { getDishURL } from "../../utils/helper";

const CuisineComponent = (props) => {

    const { resData } = props;

    return (
        <div id="cuisine-container" className="mx-24">
            {resData ? (
                <>
                    <p className="p-4 text-[1.6rem] font-bold">Any dishes you like?</p>
                    <div id="cuisine-card" className="flex p-4 overflow-x-auto">
                        <ImageList cols={resData?.card?.card?.imageGridCards?.info.length} gap={16} rowHeight={200} style={{ width: "100%" }}>
                            {resData?.card?.card?.imageGridCards?.info.map(cuisine => (
                                <ImageListItem key={cuisine.id} sx={{ width: 160, marginY: 2 }}>
                                    <Link to={"/collections/" + getDishURL(cuisine.entityId)}>
                                        <img src={CUISINE_IMG_URL + cuisine.imageId} alt="cuisine-card" />
                                    </Link>
                                </ImageListItem>
                            ))}
                        </ImageList>
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