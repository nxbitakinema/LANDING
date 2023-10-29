import React from "react";

function InfoTwo() {
    return (
        <div className="container  mx-auto  flex  items-center  py-16">
    
            <div className="w-1/2 px-6">
                <h2 className="text-3xl  font-semibold"> Welcome to Our Website </h2>
                <p className="text-gray-600  mt-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti, praesentium excepturi vel accusantium, dolorem pariatur modi omnis ab labore eos laborum illum cum illo voluptatem voluptates! Dolore, temporibus similique! </p>
            </div>
    
            <div className="w-1/2">
                <img className="w-full  h-auto  rounded-lg" alt="image" src="https://plus.unsplash.com/premium_photo-1661872391169-1397a615363d?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
            </div>

        </div>
      )
}

export default InfoTwo;
