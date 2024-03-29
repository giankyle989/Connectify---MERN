import Navbar from "../components/Navbar";
import NewPostForm from "../components/NewPostForm";
import PostCard from "../components/PostCard";

const Feed = () => {
  return (
    <div
      className="h-screen bg-slate-200 space-y-3 "
    >
      <Navbar />
      <div className="space-y-3 md:w-2/3 lg:w-1/2 md:mx-auto ">
        <NewPostForm />
        <PostCard />
      </div>
    </div>
  );
};
export default Feed;
