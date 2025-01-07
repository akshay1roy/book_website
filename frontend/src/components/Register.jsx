
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";



function Register() {

    const [message, setMessage] = useState("");
    
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-8 pb-6">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </label>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </label>
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}

          <div>
            <button className="bg-blue-500 rounded text-white font-bold hover:bg-blue-700 px-6 py-2 focus:hover:outline-none">
              Register
            </button>
          </div>
        </form>

        <p className="align-baseline font-medium mt-4 text-sm">
          Have an account ? Please
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            {" "}
            Login
          </Link>
        </p>

        {/* google icon  */}

        <div className="mt-4">
          <button 
        //   onClick={handleGoogleSingIn}
          className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary text-white font-bold py-2 px-4 rounded  hover:bg-blue-700 focus:outline-none">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-sm">
          2025 Book store. All right reserved.
        </p>
      </div>
    </div>
  )
}

export default Register
