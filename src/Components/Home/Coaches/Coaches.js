import React from "react";
import "./Coaches.css";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { MdSms } from "react-icons/md";

const Coaches = () => {
  return (
    <div>
      <div className="my-12 text-center ">
        <h1 className="text-3xl font-bold text-[#FF0336]">GYM TRAINERS</h1>
        <p className="text-2xl text-white mt-2">Team Of Expert Coaches</p>
      </div>
      <div className="coachesCard">
        <div className="max-w-sm bg-[#181818] m-auto rounded overflow-hidden shadow-lg">
          <img className="w-full hover:scale-110 ease-in duration-100 cursor-pointer" src={image1} alt="" />
          <div className="text-center">
            <div className="px-6 py-4">
              <div className="font-bold text-white text-3xl mb-2">Ana June</div>
              <p className="text-xl">Yoga Trainer</p>
            </div>
            <div className="px-6  pt-4 pb-2">
              <div className="flex icons">
                <FaFacebookSquare></FaFacebookSquare>
                <AiFillTwitterSquare></AiFillTwitterSquare>
                <FaInstagramSquare></FaInstagramSquare>
                <MdSms></MdSms>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-[#181818]  m-auto rounded overflow-hidden shadow-lg">
          <img className="w-full hover:scale-110 ease-in duration-100 cursor-pointer" src={image2} alt="" />
          <div className="text-center">
            <div className="px-6 py-4">
              <div className="font-bold text-white text-3xl mb-2">Dipjoy</div>
              <p className="text-xl">Personal Trainer</p>
            </div>
            <div className="px-6  pt-4 pb-2">
              <div className="flex icons">
                <FaFacebookSquare></FaFacebookSquare>
                <AiFillTwitterSquare></AiFillTwitterSquare>
                <FaInstagramSquare></FaInstagramSquare>
                <MdSms></MdSms>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-[#181818]  m-auto rounded overflow-hidden shadow-lg">
          <img className="w-full hover:scale-110 ease-in duration-100 cursor-pointer" src={image3} alt="" />
          <div className="text-center">
            <div className="px-6 py-4">
              <div className="font-bold text-white text-3xl mb-2">Niloy</div>
              <p className="text-xl">Fitness Trainer</p>
            </div>
            <div className="px-6  pt-4 pb-2">
              <div className="flex icons">
                <FaFacebookSquare></FaFacebookSquare>
                <AiFillTwitterSquare></AiFillTwitterSquare>
                <FaInstagramSquare></FaInstagramSquare>
                <MdSms></MdSms>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
