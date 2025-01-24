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
import useBasketStore from "@/store/store";

function Header() {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );
  const createPassKey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex flex-row-reverse flex-1 flex-wrap justify-between items-center ">
        <div className="m-auto">
          <Link
            href={"/"}
            className="text-2xl font-bold text-blue-500 cursor-pointer hover:opacity-50 mx-auto sm:mx-0"
          >
            كاجوال
          </Link>
        </div>

        <Form
          action={"/search"}
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="إبحث عن المنتجات"
            className="
            bg-gray-100
            text-gray-800
            text-right
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
          <ClerkLoaded>
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">مرحباً بك</p>
                  <p className="font-bold">{user?.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                تسجيل الدخول
              </SignInButton>
            )}

            {user?.passkeys.length === 0 && (
              <button
                onClick={createPassKey}
                className="bg-white hidden md:block hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                أنشئ مفتاح
              </button>
            )}

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
                <span>طلباتي</span>
              </Link>
            </SignedIn>
          </ClerkLoaded>

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
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            {/* items count  */}
            <span>السلة</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
