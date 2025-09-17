"use client";

import { TbTriangleFilled } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { RiPencilLine } from "react-icons/ri";
import { LiaImdb } from "react-icons/lia";
import Tiptap from "@/components/tipTap/TipTap";
import AddMovieInput from "@/components/addMovieInput/AddMovieInput";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { checkEmpty } from "@/utils/checkEmpty";
import { movieValidation } from "@/utils/movieValidation";
import toast from "react-hot-toast";
import Image from "next/image";
import { PostWithToken } from "@/utils/postWithToken";
import GenreMenu from "../genreMenu/GenreMenu";
export default function AdminPanelAddMoviePageContent() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    price: "",
    description: "",
    imdb_rate: "",
    cover_img: null,
    big_cover_img: null,
    text: "",
    genre: "",
  });

  const postData = async () => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    try {
      const res = await PostWithToken(
        "https://movienest.liara.run/api/admin/movies/create",
        data
      );
      toast.success("Add movie successfuly!");
      setFormData({
        title: "",
        time: "",
        price: "",
        description: "",
        imdb_rate: "",
        cover_img: null,
        big_cover_img: null,
        text: "",
        genre: "",
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const createHandler = () => {
    setLoading(true);
    if (checkEmpty(formData)) {
      toast.error("Please fill in all fields.");
      setLoading(false);
      return;
    }
    let mvValidation = movieValidation(formData);
    if (mvValidation.stat) {
      setLoading(false);
      toast.error(mvValidation.message);
      return;
    }
    postData();
  };

  return (
    <div className="col grow-1 sm:pl-20 sm:pr-14 sm:pb-10">
      <div className="add-movie bg-black w-full sm:rounded-md sm:border border-gray-400 sm:mt-28 p-5 relative h-auto mt-14">
        <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90 " />
        <h1 className="text-white text-xl font-bold">Add movie</h1>

        <div className="add-movie-container mt-5">
          <form>
            {/* upload images */}
            <div className="import-images w-full flex flex-wrap lg:justify-start justify-center">
              {/* small cover */}
              <div className="col small w-3/5 lg:w-1/4 p-2 order-2 lg:order-0">
                <div className="input-container relative w-full h-[380px] bg-gray-800 rounded-md cursor-pointer overflow-hidden group">
                  <input
                    required
                    name="small"
                    id="file_input1"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData({ ...formData, cover_img: file });
                      }
                    }}
                    className="hidden"
                    type="file"
                    accept="image/*"
                  />
                  {formData.cover_img instanceof File && (
                    <Image
                      unoptimized
                      src={URL.createObjectURL(formData.cover_img)}
                      alt="Cover Preview"
                      className="w-full h-full object-cover"
                      width={300}
                      height={380}
                    />
                  )}
                  <label
                    htmlFor="file_input1"
                    className="label cursor-pointer flex justify-center items-center text-4xl h-full text-gray-400 absolute inset-0"
                  >
                    {!formData.cover_img && <BiMoviePlay />}
                  </label>
                  <span className="absolute text-2xl group pointer-events-none flex justify-center w-full p-2 text-gray-400 bg-gray-950/40 -bottom-10 transition-all duration-300 group-hover:bottom-0">
                    <RiPencilLine />
                  </span>
                </div>
              </div>

              {/* big cover */}
              <div className="col big w-full lg:w-3/4 p-2">
                <div className="input-container relative w-full h-[380px] bg-gray-800 rounded-md cursor-pointer overflow-hidden group">
                  <input
                    required
                    id="file_input2"
                    name="big"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData({ ...formData, big_cover_img: file });
                      }
                    }}
                    className="hidden"
                    type="file"
                    accept="image/*"
                  />
                  {formData.big_cover_img instanceof File && (
                    <Image
                      unoptimized
                      src={URL.createObjectURL(formData.big_cover_img)}
                      alt="Big Cover Preview"
                      className="w-full h-full object-cover"
                      width={800}
                      height={380}
                    />
                  )}
                  <label
                    htmlFor="file_input2"
                    className="label cursor-pointer flex justify-center items-center text-4xl h-full text-gray-400 absolute inset-0"
                  >
                    {!formData.big_cover_img && <BiMoviePlay />}
                  </label>
                  <span className="absolute text-2xl group pointer-events-none flex justify-center w-full p-2 text-gray-400 bg-gray-950/40 -bottom-10 transition-all duration-300 group-hover:bottom-0">
                    <RiPencilLine />
                  </span>
                </div>
              </div>
            </div>

            {/* movie info */}
            <div className="movie-info flex flex-wrap mt-14">
              <AddMovieInput
                title="Title"
                formData={formData}
                setFormData={setFormData}
                icon=""
                Key="title"
              />
              <GenreMenu formData={formData} setFormData={setFormData} />
              <AddMovieInput
                title="Rate"
                formData={formData}
                setFormData={setFormData}
                icon={
                  <LiaImdb className="absolute text-orange-400 top-[34px] text-3xl right-2" />
                }
                Key="imdb_rate"
              />
              <AddMovieInput
                title="Time"
                formData={formData}
                setFormData={setFormData}
                icon={
                  <span className="absolute text-orange-400 top-[37px] right-2">
                    min
                  </span>
                }
                Key="time"
              />
              <AddMovieInput
                title="Price"
                formData={formData}
                setFormData={setFormData}
                icon={
                  <span className="absolute text-orange-400 top-9 right-2 text-lg">
                    $
                  </span>
                }
                Key="price"
              />
              <div className="col w-full p-2">
                <div className="input-container flex flex-col items-start gap-3">
                  <label htmlFor="desc" className="text-gray-300 text-sm">
                    Description* :
                  </label>
                  <textarea
                    id="desc"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    value={formData.description}
                    className="border-gray-300 resize-none caret-orange-400 h-[300px] border-[1px] rounded-sm w-full outline-none text-gray-300 p-2 bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* text editor */}
            <div className="movie-text-content p-2 mt-10">
              <Tiptap formData={formData} setFormData={setFormData} />
            </div>

            {/* button */}
            <div className="btn-container flex justify-center mt-2">
              <button
                type="button"
                onClick={createHandler}
                className="text-white bg-orange-400 rounded-md py-1 px-5 cursor-pointer flex items-center gap-2"
              >
                add movie
                {loading && <FaSpinner className="text-white animate-spin" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
