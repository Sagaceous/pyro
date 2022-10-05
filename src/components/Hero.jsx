import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import Heropyro from "../assets/Pyrohero.svg";
import Imageright from "../assets/imageright.svg";
import BackgroundImg from "../assets/backgroundurl.svg";
import Stake from "../assets/stake.svg";
import Unstake from "../assets/unstake.svg";
import Externallink from "../assets/external-link.svg";
import Info from "../assets/info.svg";

const Hero = () => {
  const [val1, setVal1] = React.useState({ min: 0, max: 100 });

  return (
    <div className="absolute ml-32 mt-10">
      <div className="grid1">
        <div>
          <p className="amount absolute top-3 left-2 text-amount">
            Holder Amount Staked
          </p>
          <img src={Heropyro} className="vector absolute top-10" alt="" />
          <h2 className="dollar top-16 px-4 py-2">$0,000,00.00</h2>
          <img
            src={Imageright}
            className="absolute top-3 right-0 pr-5 pt-1"
            alt=""
          />
        </div>
      </div>
      <div className="grid2">
        <div>
          <p className="amount absolute top-3 left-2 text-amount">
            Holder Amount Earned
          </p>
          <img src={Heropyro} className="vector absolute top-10" alt="" />
          <h2 className="dollar top-16 px-4 py-2">$0,000,00.00</h2>
          <img
            src={Imageright}
            className="absolute top-3 right-0 pr-5 pt-1"
            alt=""
          />
        </div>
      </div>
      <div className="grid3">
        <div>
          <p className="amount absolute top-3 left-2 text-amount">
            Unlock Time
          </p>
          <h2 className="time top-10 px-4 py-2">59 : 49 : 39 : 29</h2>
          <div className="timeline flex items-center pt-20 space-x-4">
            <p className="pl-5">Days</p>
            <p className="pl-2">Hours</p>
            <p className="pl-2">Mins</p>
            <p className="pl-2">Secs</p>
          </div>
          <img
            src={Imageright}
            className="absolute top-3 right-0 pr-5 pt-1"
            alt=""
          />
        </div>
      </div>
      <div className="largegrid1">
        <h2 className="stake absolute top-8 px-4 py-2">Stake</h2>
        <h2 className="balance absolute top-8 right-4 py-2">Balance: 0.00</h2>
        <div className="divider mt-24 mx-4 h-[2px]"></div>
        <div className="inputamount">
          <img className="mt-[2px]" src={BackgroundImg} alt="" />
          <input
            className="number mt-5 mx-4 rounded-lg"
            placeholder="0.00"
            type="number"
          />
        </div>

        <div>
          <input
            className="slider mt-10 ml-4"
            type="range"
            min={0}
            max={100}
            value={val1}
            onChange={(ev, v) => setVal1(v)}
          />
          <button className="absolute max rounded-lg ml-8 mt-6">Max</button>
        </div>
        <div className="flex mt-10 ml-5 items-center space-x-10">
          <div className="relative">
            <button>
              <img src={Stake} alt="" />
              <div className="stake1">STAKE</div>
            </button>
          </div>
          <div className="relative">
            <button>
              <img src={Unstake} alt="" />
              <div className="stake2">UNSTAKE</div>
            </button>
          </div>
        </div>
      </div>
      <div className="smallgrid1">
        <div>
          <p className="totalpyro absolute top-8 left-4">
            Total Pyro Staked By All Holders
          </p>
          <p className="totalpyro1 absolute flex items-center mt-16 ml-[19px]">
            <img className="mr-2 w-[80px]" src={Heropyro} alt="" />
            $000,000,000.00
          </p>
          <p className="totalpyro2 absolute top-28 mt-2 right-4">
            USDT value: $0,000.00
          </p>
        </div>
      </div>
      <div className="smallgrid2">
        <div className="flex space-x-[217px] mt-4">
          <h3 className="same1 ml-[18px]">More Info</h3>
          <p className="same2 flex items-center">
            View Pyro on Etherscan <img className="ml-[3px]" src={Externallink} alt="" />
          </p>
        </div>
        <div className="divider absolute h-[2px] top-[55px] ml-5 w-[91%]"></div>
        <div className="flex items-center space-x-[173px] mt-10">
          <h3 className="same1 ml-[18px]">Staking Instructions</h3>
          <p className="same2 flex first-letter">
            View Instructions <img className="ml-1" src={Externallink} alt="" />
          </p>
        </div>

        <p className="same1 absolute ml-[18px] mt-7">PYRO APR</p>
        <div className="percent absolute ml-[395px] mt-4">
        </div>
        <p className="absolute same3 ml-[400px] mt-7">10.0%</p>
        
      </div>
    </div>
  );
};

export default Hero;
