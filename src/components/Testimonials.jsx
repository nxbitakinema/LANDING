import React from "react";

function Testimonials() {
  return (
    <section className="bg-gray-100  py-16">

        <div className="container  mx-auto  text-center">

            <h2 className="text-3xl  font-semibold  text-gray-800"> Testimonials </h2>

            <div className="flex  flex-warp  justify-center  mt-8">

                <div className="w-full  md:w-1/2  lg:w-1/3  px-4  mb-8">
                    <div className="bg-white  p-6  rounded-lg  shadow-md">
                        <p className="text-gray-600"> "Amazing service, review is a review conducted review is a review conducted I'm very love it"</p>
                        <p className="text-gray-800  font-semibold  mt-4"> Somchai Huawai </p>
                    </div>
                </div>

                <div className="w-full  md:w-1/2  lg:w-1/3  px-4  mb-8">
                    <div className="bg-white  p-6  rounded-lg  shadow-md">
                        <p className="text-gray-600"> "A user review is a review conducted by any person who has access to the internet'"</p>
                        <p className="text-gray-800  font-semibold  mt-4"> David Beckha </p>
                    </div>
                </div>

                <div className="w-full  md:w-1/2  lg:w-1/3  px-4  mb-8">
                    <div className="bg-white  p-6  rounded-lg  shadow-md">
                        <p className="text-gray-600"> "Through user reviews,  decision are able to independently analyse and evaluate their choices"</p>
                        <p className="text-gray-800  font-semibold  mt-4"> tanaka sho </p>
                    </div>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Testimonials;
