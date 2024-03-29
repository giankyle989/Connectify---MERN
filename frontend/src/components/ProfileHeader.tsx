import pic from "../assets/react.svg";
const ProfileHeader = () => {
  return (
    <div className="bg-white mx-4 p-2 rounded-md">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold">
            Usernamezzzzzzzzzzzzzzzzzzzzzzzzzzzzz
          </h1>
          <h2 className="font-semibold">Fullname</h2>
        </div>
        <div className="p-2">
          <img
            className="rounded-full"
            width={40}
            src={pic}
            alt="Profile Photo"
          />
        </div>
      </div>
      <div className="mt-6 mb-20">
        <p className="font-semibold">Bio here</p>
      </div>
      <button className="w-full p-1 rounded-full text-center border border-slate-300 hover:bg-slate-300 active:bg-slate-400">
        Edit Profile
      </button>
    </div>
  );
};
export default ProfileHeader;
