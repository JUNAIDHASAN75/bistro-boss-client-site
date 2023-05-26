import { Link, useNavigate } from 'react-router-dom';
import imgSignUp from '../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';



const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const navigate =useNavigate()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const newUser = result.user;
            console.log(newUser)
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                console.log('user profile info updated')
                reset()
                Swal.fire({
                    title: 'name and photo Updated',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  navigate('/')
            })
            .catch(error=>console.log(error))
        })
    };



    return (
        <div className="m-auto bg_img h-[100vh] flex items-center">
            <div className="hero h-[80vh] bg-base-200 w-[90%] shadow-slate-500 shadow-2xl m-auto img-two">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img src={imgSignUp} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { 
                                    required: true, 
                                    minLength: 6, 
                                    maxLength: 20 ,
                                    pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p  className='text-red-600' role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p  className='text-red-600' role="alert">Password must be six characters</p>}
                                {errors.password?.type === 'maxLength' && <p  className='text-red-600' role="alert">Password must be less than characters</p>}
                                {errors.password?.type === 'pattern' && <p  className='text-red-600' role="alert">Password must have one uppercase,one lowercase, one number and one special character</p>}

                            </div>
                            {/* gender */}
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <select {...register("gender",{required:true})}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                                {errors.gender && <span>This field is required</span>}

                            </div> */}
                            <div className="form-control mt-6">
                                <input className="btn btn-outline bg-slate-100 shadow-2xl border-0 border-b-4 hover:text-yellow-600 my-3 text-yellow-600 hover:border-b-yellow-600" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center text-orange-600'><small>Already have an Account? <Link className='font-bold' to="/login">Go To Login</Link> </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;