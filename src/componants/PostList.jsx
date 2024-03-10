import { useContext } from "react";
import Posts from "./Posts";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div className="main-posts-div">
      {postList.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
