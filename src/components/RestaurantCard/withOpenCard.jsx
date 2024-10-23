const withOpenCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div key={props.id}>
                <label className="absolute bg-black text-white z-20 p-1 rounded-md opacity-60">Open</label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

export default withOpenCard;