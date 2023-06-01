import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, price, recipe, image, _id } = item;
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch]= useCart()

    const { user } = useContext(AuthContext)
    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const caetItem = {menuItemId : _id,price, name, image,email:user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(caetItem)
            })
                .then(res => res.json())
                .then(data => {
                    refetch(); //refetch cart to update the number of items in the cart
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'food added succesfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please Login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 rounded-md px-2 bg-slate-900 text-white ">{price}</p>
            <div className="card-body text-center">
                <h2 className="card-title flex justify-center mb-2">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 hover:text-yellow-600 my-3 text-yellow-600 hover:border-b-yellow-600">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;