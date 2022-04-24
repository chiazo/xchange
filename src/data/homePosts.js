import { Post } from "../models/post.ts";
import { posts } from "./posts";

export const homePosts = [...posts.slice(0, 2)];
export const discussionPosts = [...posts.slice(2)];

export const postObjs = homePosts.map(
  (
    {
      type,
      title,
      category,
      submission,
      status,
      author,
      icon,
      upvotes,
      downvotes,
    },
    idx
  ) =>
    new Post(
      idx,
      type,
      category,
      title,
      submission,
      status,
      author,
      icon,
      upvotes,
      downvotes
    )
);
