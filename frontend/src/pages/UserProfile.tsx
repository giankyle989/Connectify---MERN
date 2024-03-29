import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";

const UserProfile = () => {
  return (
    <div className="h-screen bg-slate-200 space-y-3 ">
      <Navbar />
      <div className="h-1/3 md:w-2/3 lg:w-1/2 md:mx-auto">
        <ProfileHeader />
      </div>
    </div>
  );
};
export default UserProfile;
