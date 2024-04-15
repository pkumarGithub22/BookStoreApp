// import React from 'react'
import { Link } from "react-router-dom";
import list from "../../public/list.json"
import axios from "axios"
import Cards from "./Cards";
import { useEffect, useState } from "react";
const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-3 p-5">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-3xl">
            We are Delighted to have you{" "}
            <span className="text-pink-600">Here! :)</span>
          </h1>
          <p className=" font-semibold mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            saepe mollitia ab perferendis dolore minima, quaerat quas nulla
            illum cum. libero accusamus quia, nisi modi magni dolorem laborum
            consectetur nulla omnis ullam quo possimus voluptate mollitia
            nesciunt id. Assumenda reiciendis error rem obcaecati non ad, quos
            voluptatibus, dolorem quisquam officia, quae necessitatibus expedita
            aperiam quaerat suscipit?
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-700 text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-slate-800 duration-300 ">
            Back
          </button>
          </Link>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4">
            {list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default Course;
