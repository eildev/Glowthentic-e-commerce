import React from "react";
import Container from "./Container";
import image from "../assets/img/navbar.jpg";

const MegaMenu = ({ showMegaMenu }) => {
  return (
    <div
      className={`bg-white w-full text-black absolute top-[100%] left-0 z-50 shadow-lg 
      transition-all duration-300 ease-in-out transform 
      ${
        showMegaMenu
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-5"
      }`}
    >
      <Container>
        <div className="grid grid-cols-5 gap-5 py-10">
          <div>
            <ul className="font-semibold text-lg">
              <li className="cursor-pointer">New</li>
              <li className="cursor-pointer">Travel Size</li>
              <li className="cursor-pointer">Professional Treatments</li>
              <li className="cursor-pointer">Daily Defense</li>
              <li className="cursor-pointer">Virtual Skincare Analysis</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">By Category</h2>
            <ul>
              <li>Cleansers</li>
              <li>Exfoliators</li>
              <li>Toners</li>
              <li>Retinols</li>
              <li>Virtual Skincare Analysis</li>
              <li>Peels and Masques</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">By Skin Condition</h2>
            <ul>
              <li>Cleansers</li>
              <li>Exfoliators</li>
              <li>Toners</li>
              <li>Retinols</li>
              <li>Virtual Skincare Analysis</li>
              <li>Peels and Masques</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Collection</h2>
            <ul>
              <li>Cleansers</li>
              <li>Exfoliators</li>
              <li>Toners</li>
              <li>Retinols</li>
              <li>Virtual Skincare Analysis</li>
              <li>Peels and Masques</li>
            </ul>
          </div>
          <div className="grid">
            <img src={image} alt="navbar Image" />
            <h4 className="font-semibold capitalize text-sm my-2">
              capture totale super potent rich cream
            </h4>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus incidunt minima dolorem nulla reprehenderit!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MegaMenu;
