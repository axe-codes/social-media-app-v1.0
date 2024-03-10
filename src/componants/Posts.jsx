import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Posts = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiOutlineDelete />
          </span>
        </h5>
        <p className="card-text">{post.content}</p>
        {post.tags.map((tag, index) => (
          <span className="card-tag" key={`"tag" + ${index}`}>
            <b>
              <i># {tag}</i>
            </b>
          </span>
        ))}
        <p className="likes">❤ : {post.reactions}</p>
      </div>
    </div>
  );
};

export default Posts;
