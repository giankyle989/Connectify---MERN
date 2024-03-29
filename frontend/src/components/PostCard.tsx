import UserBadge from "./UserBadge";
import pic from '../assets/react.svg'

const PostCard = () => {
  return (
    <div className="flex flex-col mx-4 p-2 rounded-md gap-2 bg-white divide-y">
      <UserBadge/>
      <div className="py-2">Contents Here!</div>
      <div className="grid grid-cols-2">
        <button className="hover:bg-slate-200 p-1 rounded-md">Like</button>
        <button className="hover:bg-slate-200 p-1 rounded-md">Comment</button>
      </div>
      <div className="flex mt-2 py-2 gap-x-2 px-2">
        <img className="rounded-full" src={pic} alt="image"  width={45}/>
        <input className="w-full rounded-lg p-2 bg-slate-200" type="text" placeholder="Write a comment..."/>
      </div>
    </div>
  );
};
export default PostCard;
