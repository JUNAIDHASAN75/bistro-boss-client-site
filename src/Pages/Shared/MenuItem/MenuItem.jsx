
const MenuItem = ({ item }) => {
    const {  name, price, recipe ,image} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px] shadow-xl" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}$</p>
        </div>
    );
};

export default MenuItem;