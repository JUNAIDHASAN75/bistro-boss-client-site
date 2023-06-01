import { useContext, useEffect, useState } from 'react';
import './Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import imgAuth from '../../assets/others/authentication2.png'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const Login = () => {
    const [disabled, setDisabled] = useState(true)
    console.log(disabled)
    const {singIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const handleLogin =event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        singIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            Swal.fire({
                title: 'Login Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
                
              })
              navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleValidateCaptcha = (e)=>{
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
    return (
        <div className="m-auto bg_img h-[970px] flex items-center">
            <div className="hero h-[732px] bg-base-200 w-[80%] shadow-slate-500 shadow-2xl m-auto img-two">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={imgAuth} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                    <h1 className="text-3xl font-bold pl-8 pt-5 text-center">Login</h1>
                        <form  onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label w-full">
                                < LoadCanvasTemplate />
                                </label>
                                <input  onBlur={handleValidateCaptcha}  type="text" name="captcha"  placeholder="type the text above" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                {/* TODO : make btn disabled for captha */}
                                <input disabled={disabled} className="btn btn-outline bg-slate-100 shadow-2xl border-0 border-b-4 hover:text-yellow-600 my-3 text-yellow-600 hover:border-b-yellow-600" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center text-orange-600'><small>New Here? <Link className='font-bold' to="/signup">Create a New Account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;