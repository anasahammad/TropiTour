import { useForm } from "react-hook-form";
import boy from "../assets/images/Travel-boy.jpg"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [show, setShow] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const {createUser} = useAuth() || {}
      const navigate = useNavigate()

      const handleRegister = data =>{
        const {email, password, name, photoURL} = data;
            const user = {name, email, password, photoURL};
            console.log(user);
            createUser(email, password)
            .then(result=> {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                  })
                  .then(()=>{
                    Swal.fire({
                        title: "Congratulations",
                        text: "Account Created Successfully!",
                        icon: "success"
                      });
                      navigate("/")
                  })
                
                 
            })
            .catch(error=> {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message.replace('Firebase: Error (auth/', ' ').replace(/\)/, '')}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            })
      }
    return (
        <div>
            <div className="hero min-h-screen bg-slat-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="flex-1 w-full">
      <img src={boy} alt="" className="" />
    </div>
    <div className="card shrink-0 flex-1 w-full max-w-sm ">
        <h1 className="text-center text-4xl font-bold mt-4">Sign Up</h1>
        
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input {...register('name', {
            required: true
          })} name="name" type="text" placeholder="Enter your name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">This name is required to sign up</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input {...register("email", { required: true })} name="email" type="email" placeholder="Enter your email" className="input input-bordered"  />
          {errors.email && <span className="text-red-600">This email is required to sign up</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </label>
          <input {...register("photoURL")} name="photoURL" type="text" placeholder="Enter your photo link" className="input input-bordered"  />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type={`${show ? "text" : "password"}`}
           {...register("password", {
            required: "Password is required", 
            minLength: {
              value: 6, 
              message: "Password must be at least 6 characters"
            }, 
            validate: {
              upperCase: (value)=> /[A-Z]/.test(value) || "Password must have  at least one UpperCase letter", 
              lowerCase: (value)=> /[a-z]/.test(value) || "Password must have  at least one LowerCase letter" 

            }
          })} placeholder="Enter your password" className="input input-bordered"  />
          {errors.password && <span className="text-red-600">{errors.password.message}</span>}
          <span className="absolute right-5 top-12" onClick={()=>setShow(!show)}>
            {!show ? <FaEyeSlash/> : <FaEye/>}
          </span>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FA7436] text-white">Sign Up</button>
        </div>
        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account? 
				<Link to="/login"  className="hover:underline text-[#FA7436]">Sign in</Link>.
			</p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;