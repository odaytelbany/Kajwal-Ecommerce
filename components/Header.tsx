"use client";

import React from "react";
import Link from "next/link";
import Form from "next/form";
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";

function Header() {
  const { user } = useUser();
  const createPassKey = async () => {
    try{
      const response = await user?.createPasskey();
      console.log(response);
    }catch(err){
      console.log("ERROR: ", err);
    }
  }

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex flex-1 flex-wrap justify-between items-center ">
        <div>
          <Link
            href={"/"}
            className="text-2xl font-bold text-blue-500 cursor-pointer hover:opacity-50 mx-auto sm:mx-0"
          >
            Shopr
          </Link>
        </div>

        <Form
          action={"/search"}
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="
            bg-gray-100
            text-gray-800
            px-4
            py-2
            rounded
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-opacity-50
            border
            w-full
            max-w-4xl
          "
          />
        </Form>

        <div className="flex flex-1 items-center space-x-4 mt-4 sm:mt-0 sm:flex-none ">
          <Link
            href="/basket"
            className="
            flex 
            flex-1
            relative 
            justify-center 
            sm:justify-start 
            sm:flex-none 
            items-center 
            space-x-2 
            bg-blue-500 
            hover:bg-blue-700 
            text-white 
            font-bold 
            py-2 
            px-4 
            rounded
          "
          >
            <TrolleyIcon className="h-6 w-6" />
            {/* items count  */}
            <span>My Basket</span>
          </Link>

          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/order"
                className="
              flex
              flex-1
              relative 
              justify-center 
              sm:justify-start 
              sm:flex-none 
              items-center 
              space-x-2 
              bg-blue-500 
              hover:bg-blue-700 
              text-white 
              font-bold 
              py-2 
              px-4 
              rounded
            "
              >
                <PackageIcon className="h-6 w-6" />
                {/* items count  */}
                <span>My Orders</span>
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user?.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}

            {user?.passkeys.length === 0 && (
              <button onClick={createPassKey} className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border">
                Create passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
