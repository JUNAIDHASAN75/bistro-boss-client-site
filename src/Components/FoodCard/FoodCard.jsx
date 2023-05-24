
const FoodCard = ({item}) => {
    const {  name, price, recipe ,image} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 rounded-md px-2 bg-slate-900 text-white ">{price}</p>
            <div className="card-body text-center">
                <h2 className="card-title flex justify-center mb-2">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline border-0 border-b-4 hover:text-yellow-600 my-3 text-yellow-600 hover:border-b-yellow-600">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;