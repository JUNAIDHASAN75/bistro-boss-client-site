import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now admin `,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(data);
                }
            })
    }
    const handleDelete = user => {

    }
    console.log(users)
    return (
        <div className="w-full">
            <Helmet>
                <title> Bistro Boss | All Users</title>
            </Helmet>
            <SectionTitle className="" heading={'MANAGE ALL USERS'} subHeading={'All Users'}></SectionTitle>

            <div>
                <h2 className="ml-3 text-3xl font-semibold my-4">Total Users :{users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Eamil</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn bg-transparent  rounded-full border-0 hover:bg-transparent text-green-600 text-3xl"><FaUserShield></FaUserShield></button>
                                    }</td>
                                    <td><button onClick={() => handleDelete(user)} className="btn bg-transparent  rounded-full border-0 hover:bg-transparent text-red-600 text-3xl"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;