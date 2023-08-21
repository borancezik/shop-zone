import React from "react";
import SlickSlider from "react-slick";

const Slider = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <SlickSlider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">lorem</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/img/product-1.png"}></img>
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">lorem</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/img/product-2.png"}></img>
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">lorem</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/img/product-3.png"}></img>
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">lorem</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/img/product-4.png"}></img>
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">lorem</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/img/product-5.png"}></img>
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">lorem</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/img/product-6.png"}></img>
        </div>
      </SlickSlider>
    </div>
  );
};

export default Slider;
