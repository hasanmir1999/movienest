"use client";

import Copy from "@/components/copy/Copy";
import { TbTriangleFilled } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SignUpPageContent() {
  const [passState, setPassState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const checkEmpty = () => {
    for (let key in formData) {
      if (!formData[key].trim()) {
        toast.error("Please fill in all fields!");
        return true;
      }
    }
  };

  const validation = () => {
    if (!formData.username.match(/^[a-zA-Z][a-zA-Z0-9_]{3,24}$/)) {
      toast.error(
        "Username must start with a letter and be 4–25 characters long, containing only letters, numbers, or _ ."
      );
      return true;
    }
    if (
      !formData.email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
    ) {
      toast.error("Email invalied .");
      return true;
    }
    if (
      !formData.password.match(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?\":{}|<>]).+$/
      )
    ) {
      toast.error(
        "Password must contain uppercase letter & lowercase letter, number, special character."
      );
      return true;
    }
  };

  const postData = async () => {
    try {
      const res = await fetch("https://movienest.liara.run/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        redirect: "follow",
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData);
        throw new Error(errorData.detail || "Something went wrong!");
      }

      toast.success("Signup successfuly!");
      setFormData({
        username: "",
        email: "",
        password: "",
      });
      setLoading(false);
      router.push("/signin");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const signupHandler = () => {
    setLoading(true);
    if (checkEmpty()) {
      setLoading(false);
      return;
    }
    if (validation()) {
      setLoading(false);
      return;
    }
    postData();
  };

  return (
    <>
      <div className="signup-page bg-gray-950 min-h-svh">
        <div className="header p-5">
          <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px] flex justify-between">
            <h1 className="text-white text-2xl font-bold">
              <span className="text-2xl font-bold text-orange-400">/</span> Sign
              up
            </h1>
            <span className="relative group">
              <Link href="/" className="text-white">
                Home
              </Link>
              <span className="absolute w-full h-0.5 scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-300 bg-orange-400 bottom-0 left-0 drop-shadow-lg drop-shadow-orange-400" />
            </span>
          </div>
        </div>
        <div className="form-container flex justify-center p-10 h-[83svh]">
          <form className="rounded-md backdrop-blur-2xl w-[400px]">
            <h5 className="text-white text-xl font-bold mb-5 flex items-center gap-2 relative">
              Movienest
              <TbTriangleFilled className="rotate-90 !text-orange-400" />
              <span className="absolute w-full h-0.5 bg-orange-400 -bottom-4 right-0"></span>
            </h5>
            <div className="input-container flex flex-col items-start gap-3 mt-10 mb-8">
              <label htmlFor="username" className="text-gray-300 text-sm">
                Username* :
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="border-gray-300 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
              />
            </div>
            <div className="input-container flex flex-col items-start gap-3 my-8">
              <label htmlFor="email" className="text-gray-300 text-sm">
                Email* :
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border-gray-300 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
              />
            </div>
            <div className="input-container flex flex-col items-start gap-3 my-8 relative">
              <label htmlFor="password" className="text-gray-300 text-sm">
                Password* :
              </label>
              <input
                type={`${passState ? "text" : "password"}`}
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="border-gray-300 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
              />
              {passState ? (
                <FaEyeSlash
                  className="cursor-pointer text-gray-100 text-2xl absolute right-2 top-[37px]"
                  onClick={() => setPassState(!passState)}
                />
              ) : (
                <FaEye
                  className="cursor-pointer text-gray-100 text-2xl absolute right-2 top-[37px]"
                  onClick={() => setPassState(!passState)}
                />
              )}
            </div>
            <div className="btn-container flex justify-end mt-10">
              <button
                onClick={() => signupHandler()}
                type="button"
                className="text-white bg-orange-400 rounded-md py-1 px-5 cursor-pointer flex items-center gap-2"
              >
                Sign up
                {loading && <FaSpinner className="text-white animate-spin" />}
              </button>
            </div>
            <div className="line bg-gray-400 w-full h-[1px] mt-10" />
            <p className="text-gray-300 text-center mt-3 text-sm">
              Already have an account ?
              <Link
                href="/signin"
                className="transition-all duration-300 hover:!text-orange-400 !text-orange-300"
              >
                Sign in
              </Link>
              .
            </p>
          </form>
        </div>
        <Copy />
      </div>
    </>
  );
}
