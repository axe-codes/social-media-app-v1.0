import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );

  const addPost = (userId, title, content, reactions, tags) => {
    dispachPostList({
      type: "ADD_POST",
      payload: {
        id: Math.floor(Math.random() * (10000 - 1 + 1)) + 1,
        title: title,
        content: content,
        reactions: reactions,
        user_Id: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispachPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POSTLIST = [
  {
    id: 1,
    title: "This is a title",
    content: "This is a post content",
    reactions: 100,
    user_Id: 101,
    tags: ["hash-tag1", "hash-tag2", "hash-tag1"],
  },
  {
    id: 2,
    title: "This is a title 2",
    content: "This is a post content 2",
    reactions: 200,
    user_Id: 102,
    tags: ["hash-tag1", "hash-tag2", "hash-tag1"],
  },
  {
    id: 3,
    title: "This is a title 3",
    content: "This is a post content 3",
    reactions: 100,
    user_Id: 103,
    tags: ["hash-tag1", "hash-tag2", "hash-tag1"],
  },
];

export default PostListProvider;
