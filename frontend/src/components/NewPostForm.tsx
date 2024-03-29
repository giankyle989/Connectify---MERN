import { useState } from "react";
import pic from "../assets/react.svg";
import CreatePost from "./CreatePost";

const NewPostForm = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex mx-4 p-2 rounded-md gap-3 bg-white">
      <img className="rounded-full" src={pic} alt="image" />
      <div
        className="w-full rounded-lg bg-slate-200 py-2 px-4 hover:cursor-pointer hover:bg-slate-300"
        onClick={() => setShowModal(true)}
      >
        <p>What's on your mind, User?</p>
      </div>
      <CreatePost visible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
export default NewPostForm;
