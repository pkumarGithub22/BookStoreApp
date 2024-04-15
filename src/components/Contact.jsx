// import React from 'react'

import { Link } from "react-router-dom"
import Login from "./Login"

const Contact = () => {
  return (
    <div>
       <div className="flex h-screen items-center justify-center bg-pink-200">
      <div className=" rounded-md p-3 bg-white">
        <div className="model-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost mt-[-10px] ml-[220px] md:ml-[300px] bg-slate-200"
            >
              ✕
            </Link>
            <h3 className="font-bold text-2xl">Contact Us</h3>

            {/* name */}
            <div className="mt-5">
              <h2 className="font-semibold">Name</h2>
              <input
                type="name"
                placeholder="Enter your name"
                className="w-60 md:w-80 h-8 rounded-md border p-2"
            
              />
              <br />
            
            </div>
            {/* Email */}
            <div className="mt-5">
              <h2 className="font-semibold">Email</h2>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-60 md:w-80 h-8 rounded-md border p-2"
                // {...register("email", { required: true })}
              />
              {/* <br />
              {errors.email && (
                <span className="text-sm text-pink-500">
                  This field is required
                </span>
              )} */}
            </div>

            {/* Password */}
            <div className="mt-3 ">
              <h2 className="font-semibold">Message</h2>
              <input
                type="password"
                placeholder="Type your  message"
                className="w-60 md:w-80 h-20 rounded-md border outline-none p-2 "
                // {...register("password", { required: true })}
              />
              {/* <br />
              {errors.password && (
                <span className="text-sm text-pink-500">
                  This field is required
                </span>
              )} */}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-600 text-white font-semibold px-3 py-1 rounded-md cursor-pointer hover:bg-slate-800 duration-300">
                Sign Up
              </button>
              <p>
                Have account?{" "}
                <button
                  to="/login"
                  className="text-blue-600 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Log In
                </button>
                <Login />{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
