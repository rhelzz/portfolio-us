import React from "react";
import assets2 from '../assets/assets2.jpg';

const Section2 = () => {

    return (

        <section className="h-[32rem] container mx-auto flex">
                <div className="w-1/2 relative">
                    <div className="bg-[#324932] px-10 py-20 font-montserrat text-white z-40 absolute top-52 right-60 text-xl font-semibold">
                        <p>FB : Gibran/Rasyad</p>
                        <p>IG : Gibran/Rasyad</p>
                        <p>Github : Gibran/Rasyad</p>
                    </div>
                </div>
                <div className="w-1/2 relative">
                    <img
                        src={assets2}
                        alt=""
                        className="w-[28rem] h-auto absolute right-36 top-32 z-20"
                    />
                    <i className="fa-solid fa-star-of-life mx-3 text-yellow-400 text-5xl absolute top-56 right-28 z-20 rotate-6"></i>
                    <i className="fa-solid fa-star-of-life mx-3 text-yellow-400 text-4xl absolute top-[17rem] right-20 z-20 rotate-90"></i>

                    <h1 className="text-[10rem] font-montserrat text-transparent font-bold absolute right-[20rem] top-[375px] stroke-text z-10">
                        PORTFOLIO
                    </h1>
                    <h1 className="text-[10rem] font-montserrat text-transparent font-bold absolute right-[20rem] top-[250px] stroke-text">
                        PORTFOLIO
                    </h1>
                    <h1 className="text-[10rem] font-montserrat text-transparent font-bold absolute right-[20rem] top-[125px] stroke-text">
                        PORTFOLIO
                    </h1>
                    <h1 className="text-[10rem] font-montserrat text-white font-bold absolute right-[20rem] top-[0px] z-20">
                        PORTFOLIO
                    </h1>
                </div>
            </section>

    );
}

export default Section2;