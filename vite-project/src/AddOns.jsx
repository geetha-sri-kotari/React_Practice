import React from "react";
import Img from "./assets/react.svg";
import CountUp from "react-countup";
import Tilty from "react-tilty";
import { Toaster, toast } from "react-hot-toast";
import { Watch } from "react-loader-spinner";
import Confetti from "react-confetti";
import {Carousel} from "react-responsive-carousel";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const AddOns = () => {
  const give_toast = () => {
    toast.success("Here is the Toast");
  };
  return (
    <>
      <h1>
        <CountUp end={1000} duration={5} />
      </h1>
      <Tilty>
        <img src={Img} className="tilty-img" />
      </Tilty>
      <button onClick={give_toast}>Click to Toast</button>
      <Toaster />
      <Watch
        visible={true}
        position="top-right"
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <Confetti />
      <Carousel>
        <div>
            <p>1</p>
        </div>
        <div>
            <p>2</p>
        </div>
        <div>
            <p>3</p>
        </div>
      </Carousel>
    </>
  );
  ReactDOM.render(<AddOns />, document.querySelector('.demo-carousel'));
};

export default AddOns;
