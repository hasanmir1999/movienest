
export default function UserListCardload() {
  return (
    <>
      <div
        className="user-list-card w-full bg-black flex items-center justify-between p-2 rounded-md border relative border-gray-400"
      >
        <div className="icon-name-role flex items-center gap-3">
          <div className="user-icon bg-gray-600 rounded-full w-12 sm:w-14 h-12 sm:h-14 border border-gray-400"></div>
          <div className="user-name-role">
            <div className="h-3 w-24 bg-gray-400 rounded animate-pulse"></div>
            <div className="h-3 w-20 bg-gray-400 rounded animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
