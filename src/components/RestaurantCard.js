
const RestaurantCard = (props) => {
  const { resData } = props;
  
  return (
    <div className="border m-2 p-2 border-solid w-[300px] flex flex-col rounded-lg bg-gray-200">
       <img className=" w-full h-[260] m-auto rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData?.info?.cloudinaryImageId} alt="image not found"></img>

      <h3 className="font-bold text-lg mt-2">{resData?.info.name}</h3>
      <h4 className="max-w-full flex flex-wrap break-words whitespace-normal mb-2">
        {resData?.info.cuisines.join(", ")}
      </h4>
      <h4>{resData?.info.avgRating} stars</h4>
    </div>
  );
}

export default RestaurantCard;
