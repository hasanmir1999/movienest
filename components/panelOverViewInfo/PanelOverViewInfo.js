import { LuUserRound, LuUserRoundCog } from "react-icons/lu";
import { useSelector } from "react-redux";
export default function PanelOverViewInfo() {
  const { user } = useSelector((state) => state.profile);


  return (
    <>
      <div className="row flex flex-wrap mt-5 gap-3">
        <div className="col w-full sm:w-auto">
          <div className="icon-container sm:ml-2 w-[200px] h-[200px] bg-gray-800 rounded-md flex justify-center items-center">
            {user && (user.role == 'admin' ?<LuUserRoundCog className="text-5xl text-gray-400" />:<LuUserRound className="text-gray-400 text-5xl" />)}
          </div>
        </div>
        <div className="col">
          <div className="info">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3">
                {user ?
                  <>
                    <p className="title text-gray-300 font-bold">username : </p>
                    <p className="text-gray-400">{user.username}</p>
                  </>:
                    <div className="h-4 w-40 bg-gray-600 rounded animate-pulse"></div>
                }
              </li>
              <li className="flex items-center gap-3">
                {user ?
                  <>
                    <p className="title text-gray-300 font-bold">email : </p>
                    <p className="text-gray-400">{user.email}</p>
                  </>:
                    <div className="h-4 w-48 my-2 bg-gray-600 rounded animate-pulse"></div>
                }
              </li>
              <li className="flex items-center gap-3">
                {user ?
                  <>
                    <p className="title text-gray-300 font-bold">role : </p>
                    <p className="text-gray-400">{user.role}</p>
                  </>:
                    <div className="h-4 w-32 bg-gray-600 rounded animate-pulse"></div>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
