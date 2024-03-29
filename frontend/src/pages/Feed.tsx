import Navbar from "../components/Navbar"
import NewPostForm from "../components/NewPostForm"
import PostCard from "../components/PostCard"

const Feed = () => {
  return (
    <div className="h-screen bg-slate-200 space-y-3">
        <Navbar/>
        <NewPostForm/>
        <PostCard/>
    </div>
  )
}
export default Feed