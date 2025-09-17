"use client";

import { fetchWithToken } from "@/utils/fetchWithToken";
import { use, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { TbTriangleFilled } from "react-icons/tb";
import { validation } from "@/utils/validation";
import { checkEmpty } from "@/utils/checkEmpty";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateUser } from "@/redux/slices/usersSlice";

export default function AdminPanelEditUserPageContent({ params }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
  });
  const paramsR = use(params);

  const loadData = async () => {
    const data = await fetchWithToken(
      `https://movienest.liara.run/api/admin/user/${paramsR._id}`
    );
    const { username, role, email } = data;
    setFormData({ username, role, email });
  };

  useEffect(() => {
    loadData();
  }, []);

  const updateHandler = async () => {
    setLoading(true);

    if (checkEmpty(formData)) {
      toast.error("Please fill in all fields!");
      setLoading(false);
      return;
    }

    if (validation(formData).stat) {
      toast.error(validation(formData).message);
      setLoading(false);
      return;
    }

    try {
      dispatch(updateUser({id:paramsR._id , newData: formData}))
      toast.success("User update successfuly!");
      setLoading(false);
      router.push("/adminpanel/users");

    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="col grow-1 sm:pl-20 sm:pr-14 sm:pb-10">
        <div className="user-edit bg-black w-full sm:rounded-md sm:border border-gray-400 sm:mt-28 mt-14 relative h-svh sm:h-auto p-5 pb-16">
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90 " />
          <div className="section-header">
            <h1 className="text-white text-xl font-bold">Edit user</h1>
          </div>
          <div className="edit-user-form flex justify-center mt-5">
            <form className="rounded-md backdrop-blur-2xl w-[400px]">
              <div className="input-container flex flex-col items-start gap-3 mb-8">
                <label htmlFor="username" className="text-gray-300 text-sm">
                  Username :
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  value={formData.username ? formData.username : ""}
                  className="border-gray-300 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
                />
              </div>
              <div className="input-container flex flex-col items-start gap-3 my-8">
                <label htmlFor="email" className="text-gray-300 text-sm">
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email ? formData.email : ""}
                  className="border-gray-300 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
                />
              </div>
              <div className="input-container flex flex-col items-start gap-3 my-8 mb-8">
                <label htmlFor="role" className="text-gray-300 text-sm">
                  Role :
                </label>
                <select
                  id="role"
                  value={formData.role ? formData.role : ""}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="border-gray-300 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
                >
                  <option value="admin">admin</option>
                  <option value="user">user</option>
                </select>
              </div>
              <div className="btn-container flex justify-end mt-10">
                <button
                  onClick={(e) => updateHandler(e)}
                  type="button"
                  className="text-white bg-orange-400 rounded-md py-1 px-5 cursor-pointer w-full flex items-center justify-center gap-2"
                >
                  Edit info
                  {loading && <FaSpinner className="text-white animate-spin" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
