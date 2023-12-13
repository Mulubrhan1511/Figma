import React from "react";

import { Button, Img, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-sairacondensed items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[586px] items-center justify-start w-full">
          <div className="flex flex-col md:gap-10 gap-[181px] justify-start w-full">
            <div className="h-[574px] md:px-5 relative w-full">
              <Img
                className="h-[574px] m-auto object-cover w-full"
                src="images/img_rectangle1.png"
                alt="rectangleOne"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[72px] justify-start right-[1%] top-[6%] w-[87%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[11px] w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-[63px] w-[75px]"
                      src="images/img_play.svg"
                      alt="play"
                    />
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 uppercase w-auto"
                      size="txtSairaCondensedBold36"
                    >
                      BOXCHAMPY
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-[29px] items-end justify-start md:ml-[0] ml-[389px] md:mt-0 mt-1.5 w-auto sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-[69px]"
                      size="txtSairaCondensedBold32"
                    >
                      Home
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-[81px]"
                      size="txtSairaCondensedBold32"
                    >
                      AbouT
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-[125px]"
                      size="txtSairaCondensedBold32"
                    >
                      Locations
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-[101px]"
                      size="txtSairaCondensedBold32"
                    >
                      contact
                    </Text>
                  </div>
                  <Button className="cursor-pointer font-bold min-w-[132px] md:ml-[0] ml-[43px] md:text-3xl sm:text-[28px] text-[32px] text-center uppercase">
                    SigN up
                  </Button>
                </div>
                <Text
                  className="leading-[90.00%] md:text-5xl text-[130px] text-white-A700 uppercase w-[52%] sm:w-full"
                  size="txtSairaCondensedBold130"
                >
                  <span className="text-white-A700 font-sairacondensed text-left font-bold">
                    Fight like a{" "}
                  </span>
                  <span className="text-red-900 font-sairacondensed text-left font-bold">
                    champion
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start md:ml-[0] ml-[196px] md:px-5 w-[69%] md:w-full">
              <Img
                className="h-[443px] sm:h-auto object-cover w-[54%] md:w-full"
                src="images/img_rectangle3.png"
                alt="rectangleThree"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row gap-2 items-end justify-start w-auto sm:w-full">
                  <div className="bg-red-900_01 h-[51px] w-[3%]"></div>
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 uppercase w-[424px]"
                    size="txtSairaCondensedBold50"
                  >
                    Fight like a Champion
                  </Text>
                </div>
                <Text
                  className="leading-[90.00%] max-w-[466px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtSairaCondensedRegular30"
                >
                  <>
                    yes you have to gain some weight for yore s I&#39;m Monica,
                    your personal office assistant.I&#39;m Monica, your personal
                    office assistant.I&#39;m Monica, your personal office
                    assistant.yes you have to gain some weight for yore s
                    I&#39;m Monica, your personal office assistant.I&#39;m
                    Monica, your personal office assistant.I&#39;m Monica, your
                    personal office assistant.
                  </>
                </Text>
                <Button className="cursor-pointer font-bold min-w-[132px] md:text-3xl sm:text-[28px] text-[32px] text-center uppercase">
                  SigN up
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col md:gap-10 gap-[212px] justify-start pb-[53px] md:px-10 sm:px-5 px-[53px] w-full">
            <div className="h-[116px] md:h-[163px] sm:h-[79px] max-w-[1106px] mx-auto relative w-full">
              <Text
                className="absolute left-[1%] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 top-[0] uppercase"
                size="txtSairaCondensedBold50"
              >
                Fight like
              </Text>
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 gap-[330px] inset-x-[0] items-start justify-between mx-auto w-auto">
                <Text
                  className="leading-[90.00%] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 uppercase"
                  size="txtSairaCondensedBold50WhiteA700"
                >
                  <span className="text-white-A700 font-sairacondensed text-left font-bold">
                    <>
                      Ready for your
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left font-bold">
                    next
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left font-bold">
                    {" "}
                    Lesson
                  </span>
                </Text>
                <Img
                  className="h-[68px] w-[215px]"
                  src="images/img_frame1.svg"
                  alt="frameOne"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[595px] items-end justify-between max-w-[1262px] mx-auto w-full">
              <div className="flex flex-row gap-[18px] items-center justify-start w-auto">
                <Img className="h-6 w-6" src="images/img_lock.svg" alt="lock" />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtSairaCondensedRegular24"
                >
                  mulubrhangebrkidan@gmail.com
                </Text>
              </div>
              <div className="flex flex-row gap-[41px] items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtSairaCondensedRegular24"
                >
                  Privacy & Policy
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtSairaCondensedRegular24"
                >
                  Terms & Conditions
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
