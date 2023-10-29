import React from "react";

function Navbar() {
  return (

    <nav className="bg-black  p-4">

        <div className="container mx-auto flex justify-between items-center">

            <a href="#"  className="text-white  text-2xl  font-semibold  hover:font-mono" > LANDING </a>

            <ul className="flex  space-x-4">
                <li><a href="#" className="text-white"> home    </a></li>
                <li><a href="#" className="text-white"> about   </a></li>
                <li><a href="#" className="text-white"> product </a></li>
                <li><a href="#" className="text-white"> contact </a></li>
            </ul>
            
        </div>
        
    </nav>
  )
}

export default Navbar;
