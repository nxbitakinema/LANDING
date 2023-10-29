import React from "react";

function InfoOne() {
    return (
        <div className="container  mx-auto  flex  items-center  py-16">
            
            <div className="w-1/2">
                <img className="w-full  h-auto  rounded-lg" alt="image" src="https://images.unsplash.com/photo-1698222489084-4e70447821a8?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
            </div>

            <div className="w-1/2 px-6">
                <h2 className="text-3xl  font-semibold"> Welcome to Our Website </h2>
                <p className="text-gray-600  mt-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti, praesentium excepturi vel accusantium, dolorem pariatur modi omnis ab labore eos laborum illum cum illo voluptatem voluptates! Dolore, temporibus similique! </p>
            </div>

        </div>
    )
}

export default InfoOne;
