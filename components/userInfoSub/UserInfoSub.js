import UserInfoSubInfo from "../userInfoSubInfo/UserInfoSubInfo";

export default function UserInfoSub({tabStatus ,id}) {
  return (
    <>
      <div
        className={`subscription flex justify-center pb-5 ${
          tabStatus != "subscription" && "hidden"
        }`}
      >
        <UserInfoSubInfo id={id} />
      </div>
    </>
  );
}
