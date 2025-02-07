"use client";

import { useUserContext } from "@/context/userContext";
import { facb, moon,Profile } from "@/utils/icons";
import { profile } from "console";
import Link from "next/link";
import React from "react";

function Header() {

    const {user} = useUserContext();

    const { name } = user;

    const userId = user._id;
  


    return (
        <header className="px-6 my-4 w-full flex items-center justify-between bg-[#f9f9f9]">
        <div>
            <h1 className="text-lg font-medium">
                <span role="img" aria-label="wave">
                    👋
                </span>
                {userId ? `Welcome, ${name}!` : "Welcome to ATB"}
            </h1>
            <p className="text-sm">
          {userId ? (
            <>
              You have{" "}
              <span className="font-bold text-[#3aafae]">5</span>
              &nbsp;active reclams
            </>
          ) : (
            "Please login or register to view your reclams"
          )}
        </p>
        </div>
        <div className="h-[50px] flex items-center gap-[10.4rem]">
           <button className="px-8 py-3 bg-[#3aafae] text-white rounded-[50px]
             hover:bg-[#b65325] hover:text-white transition-all duration-200 ease-in-out">
                Create a new reclam
            </button>
            <div className="flex gap-4 items-center">
                <Link
                href="https://www.facebook.com/ArabTunisianBank/?locale=fr_FR"
             passHref
             target="_blank"
             rel="noopener noreferrer"
                className="h-[40px] w-[40px] text-[#b65325] rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]">
         
            {facb}
          </Link>

          <Link
                href="https://www.facebook.com/ArabTunisianBank/?locale=fr_FR"
             passHref
             target="_blank"
             rel="noopener noreferrer"
                className="h-[40px] w-[40px] text-[#b65325] rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]">
         
            {moon}
          </Link>


          <Link
                href="https://www.facebook.com/ArabTunisianBank/?locale=fr_FR"
             passHref
             target="_blank"
             rel="noopener noreferrer"
                className="h-[40px] w-[40px] text-[#b65325] rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]">
         
            {Profile}

          </Link>

 

            </div>
        </div>
      </header>
    );
}

export default Header;