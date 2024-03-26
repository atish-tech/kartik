import mountainImg from "../assets/mountain.jpg";
import logo from "../assets/logo.jpg";
import logotext from "../assets/logo-text.jpg";

import logoText from "../assets/logoText.png";

import clowser from "../assets/clowser.png";
import bottom from "../assets/bottom.png";

import { Navigation } from "./Navigation";
import { useNavigate } from "react-router-dom";

export const History = () => {
  const navigateTo = useNavigate();
  return (
    <div className="h-screen w-screen overflow-auto">
      {/* Navigation */}
      <div className="w-full bg-white py-3 flex items-center justify-around">
        <img
          onClick={() => navigateTo("/")}
          src={logoText}
          alt="logo"
          className="w-[150px] cursor-pointer "
        />
        <Navigation textColor="#1f1f36" />
      </div>

      <div
        style={{
          backgroundImage: `url(${mountainImg})`,
          backgroundSize: "cover",
        }}
        className=" h-screen"
      >
        <div className="w-full h-full flex flex-col items-center justify-between">
          <div className="w-[70%] flex flex-col justify-center">
            <div className="flex items-center ">
              {/* <img src={one} alt="onr" /> */}
              <p className="text-8xl text-[#828ba7] font-bold ">01.</p>
              <p className="text-2xl text-[#3d5168] font-bold">HISTORY</p>
            </div>
            <p className="text-black px-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only.s
              {/* five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages */}
            </p>
          </div>
          <img src={clowser} alt="" className="mt-[3vh]" />
        </div>
      </div>

      <div className="flex py-5 bg-white items-center justify-center">
        <p className="text-8xl text-[#828ba7] font-bold ">02.</p>
        <p className="text-2xl text-[#3d5168] font-bold">CLIMB</p>
        <p className="text-black ml-5">
          Cras sclerisque id quam sed dignissim Pellestesque urna nunc , gravida
          quis hendrer ac ,<br /> tristique ut quam . Vivamus dignissm tortor
          nec cogue
        </p>
      </div>

      <div className="bg-[#212954] flex items-center ">
        <p className="underline bg-[#99a2bc] md:ml-[200px] text-[#242b56] font-bold p-2 w-fit text-3xl">
          MOUNTAIN 1
        </p>
        <p className="underline text-[#adb5cf] font-bold p-2 w-fit text-3xl">
          MOUNTAIN 2
        </p>
      </div>

      <img src={bottom} alt="" className="w-screen" />

      <div className="bg-[#212954] flex justify-around items-center py-5">
        <div className="flex gap-3">
          <img src={logo} alt="" className="w-[50px] rounded-full" />
          <img src={logotext} alt="" className="w-[100px]" />
        </div>
        <p className="text-[#5e6484] font-bold">COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};
