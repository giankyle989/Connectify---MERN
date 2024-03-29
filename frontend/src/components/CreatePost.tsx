import UserBadge from "./UserBadge";

interface CreatePostProps {
  visible: boolean;
  onClose: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
        <div className="relative w-96 z-50 bg-white rounded-md">
          {/**Header */}
          <div className="flex p-2">
            <h1 className="w-full text-center font-bold">Create Post</h1>
            <button
              className="hover:bg-slate-200 rounded-full"
              onClick={handleClose}
            >
              X
            </button>
          </div>

          <UserBadge />

          {/**Content */}
          <div className="flex flex-col">
            <textarea
              className="p-2 resize-none outline-none"
              placeholder="What's on your mind?"
              cols={20}
              rows={5}
            ></textarea>
            <button className="bg-sky-400 text-white p-2 m-4 font-semibold">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
