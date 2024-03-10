import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const user_IdElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = user_IdElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    user_IdElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, title, content, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          ref={user_IdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Please enter your user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today ?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          ref={contentElement}
          type="text"
          className="form-control"
          id="content"
          placeholder="Tell us more about it...."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many reactions you got for this post ?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hash tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter your Hash tags here.."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
      {/* <button type="clear" className="btn btn-primary">
        Clear
      </button> */}
    </form>
  );
};
export default CreatePost;
