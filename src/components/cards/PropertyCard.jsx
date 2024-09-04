import React from "react";
import ngnIcon from "../../assets/icons/CurrencyNgn.png";
import heart from "../../assets/icons/Heart.png";
import bedIcon from "../../assets/icons/Bed.png";
import bathIcon from "../../assets/icons/Bathtub.png";
import tdesign from "../../assets/icons/tdesign_measurement-2.png";

const PropertyCard = ({ _id, title, image, price, bed, bath, size }) => {
  return (
    <>
      <div
        className="rounded-2xl border border-slate-300 max-w-[400px] text-dark hover:shadow-lg shadow-primary-foreground hover:border-primary"
        key={_id}
      >
        <div className="h-[396px] p-2 2xl:p-6 rounded-2xl">
          <img src={image} alt="" className="w-full h-[245px]" />
          <div className=" flex text-[#1F1F1F] justify-between pt-2">
            <div className="flex">
              <img src={ngnIcon} alt="ngn" className="" />
              <span className="font-semibold">{price.toLocaleString("en-us")}</span>
            </div>
            <img src={heart} alt="vector" className="w-[20px] h-[20px]" />
          </div>
          <div className="text-[#1F1F1F] weight-[700] text-xl font-semibold pt-2">
            <h3 className="font-bold">
              {title && title.length > 28 ? `${title.slice(0, 25)}...` : title}
            </h3>
          </div>
          <div className="w-full justify-between flex text-[#1F1F1F]">
            <div className="w-[25%] text-[#1F1F1F] flex items-center">
              <div className="w-[50%]">
                <img src={bedIcon} alt="bed" className="" />
              </div>
              <span className="w-[50%] text-sm">{bed} bed</span>
            </div>

            <div className="w-[25%] text-[#1F1F1F] flex items-center">
              <div className="w-[50%]">
                <img src={bathIcon} alt="bed" className="" />
              </div>
              <span className="w-[50%] text-sm">{bath} bed</span>
            </div>

            <div className="w-[35%] text-[#1F1F1F] flex  items-center">
              <div className="w-[30%]">
                <img src={tdesign} alt="bed" className="" />
              </div>
              <span className="w-[70%] text-sm">{size} sq ft</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
