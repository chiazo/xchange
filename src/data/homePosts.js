import { Category, Status, Type, Post } from "../models/post.ts";

export const homePosts = [
  {
    type: Type.Discussion,
    title: "Why I left CS",
    category: [Category.MainCategories.Academics, Category.Miscellaneous.Rant],
    submission:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: Status.Public,
    author: "@adamj22",
    icon: "img",
    upvotes: 500,
    downvotes: 40,
    upvoted: false,
    downvoted: false,
  },
  {
    type: Type.Discussion,
    title: "Ranking Franklin",
    category: [Category.Dining.Franklin],
    submission:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: Status.Anon,
    author: "@adamj22",
    icon: "img",
    upvotes: 470,
    downvotes: 70,
    upvoted: false,
    downvoted: false,
  },
];

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
      upvoted,
      downvoted,
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