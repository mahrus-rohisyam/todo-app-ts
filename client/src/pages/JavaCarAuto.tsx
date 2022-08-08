import React from "react";
import { useState } from "react";
import IAccessorie from "../interfaces/IAccessorie";

const Index = () => {
  const [company, setCompany] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [stock, setStock] = useState<number>(0);
  const [madeIn, setMadeIn] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [accessories, setAccessories] = useState<IAccessorie[]>([]);

  const handleAccessories = async () => {
    const newAccessories = {
      _id: Date.now(),
      company: company,
      brand: brand,
      name: name,
      type: type,
      stock: stock,
      madeIn: madeIn,
      color: color,
      price: price,
      isDone: false,
    };

    setAccessories([...accessories, newAccessories]);
    setCompany("");
    setBrand("");
    setName("");
    setType("");
    setStock(0);
    setMadeIn("");
    setColor("");
    setPrice(0);
    await console.log(accessories);
  };

  const handleCompleteTask = (id: number): void => {
    setAccessories(accessories.map((v) => {
      if(v._id === id) {
        v.isDone = !v.isDone
        return v
      } else {
        return v
      }
    }));
  }

  return (
    <>
      <div className="md:fixed top-44 w-full">
        <div className="md:fixed md:flex items-center justify-between left-20">
          <p className="space-x-4">
            admin name <button className="">Logout</button>
          </p>
          <nav className="md:fixed md:flex right-20 top-44">
            <ul>
              add product
              <li>
                <a href="#">accessories</a>
              </li>
              <li>
                <a href="#">car tires</a>
              </li>
              <li>
                <a href="#">car vekg</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:flex justify-center items-center">
          <p>add accessories</p>
        </div>
        <div className="md:flex justify-center items-center">
          <p>by admin</p>
        </div>
        <div className="md:fixed flex justify-between items-center space-x-40 top-60 left-60">
          <form action="" className="w-full h-70 space-x-20">
            <br />
            <label htmlFor="" className="flex mt-4">
              company
            </label>
            <input type="input" className="text-black" /> {company}
            <label htmlFor="" className="flex mt-4">
              brand
            </label>
            <input type="text" /> {brand}
            <label htmlFor="" className="flex mt-4">
              accessories name
            </label>
            <input type="text" /> {name}
            <label htmlFor="" className="flex mt-4">
              type
            </label>
            <input type="text" /> {type}
          </form>
          <form action="" className="w-full h-70 space-x-20">
            <br />
            <label htmlFor="" className="flex mt-4">
              stock
            </label>
            <input type="text" /> {stock}
            <label htmlFor="" className="flex mt-4">
              made in
            </label>
            <input type="text" /> {madeIn}
            <label htmlFor="" className="flex mt-4">
              color
            </label>
            <input type="text" /> {color}
            <label htmlFor="" className="flex mt-4">
              price
            </label>
            <input type="text" /> {price}
          </form>
          <div className="md:fixed md:flex justify-end items-baseline top-[80%] right-[31%]">
            <button
              onClick={handleAccessories}
              type="submit"
              className="mt-4 bg-slate-600 text-red-300 py-2 px-6 rounded-md hover:bg-slate-400"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
