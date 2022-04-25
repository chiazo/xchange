import { Category, Status, Type, Post } from "../models/post.ts";

/**
 * Img Credit: https://www.uifaces.co/browse-avatars/?provider%5B%5D=7
 */

export const posts = [
  {
    id: 0,
    type: Type.Discussion,
    title: "Why I left CS",
    category: [Category.MainCategories.Academics, Category.Miscellaneous.Rant],
    submission:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: Status.Public,
    author: "adamj22",
    icon: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    date: new Date("2022-03-04T03:24:00"),
    upvotes: 500,
    downvotes: 40,
    upvoted: false,
    downvoted: false,
    comments: [
      {
        submission:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        status: Status.Public,
        author: "samk34",
        icon: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
        date: new Date("2022-03-04T03:24:00"),
        upvotes: 500,
        downvotes: 40,
        upvoted: false,
        downvoted: false,
      },
    ],
  },
  {
    id: 1,
    type: Type.Discussion,
    title: "Ranking Franklin",
    category: [Category.Dining.Franklin],
    submission:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: Status.Anon,
    author: "lilyw2",
    icon: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    date: new Date("2022-05-04T03:24:00"),
    upvotes: 470,
    downvotes: 70,
    upvoted: false,
    downvoted: false,
    comments: [
      {
        submission:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        status: Status.Public,
        author: "adamj22",
        icon: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
        date: new Date("2022-03-04T03:24:00"),
        upvotes: 500,
        downvotes: 40,
        upvoted: false,
        downvoted: false,
      },
    ],
  },
  {
    id: 2,
    type: Type.Discussion,
    title: "Thoughts on Connect Carolina?",
    category: [Category.MainCategories.Academics],
    submission:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: Status.Anon,
    author: "samk34",
    icon: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    date: new Date("2022-06-14T03:24:00"),
    upvotes: 404,
    downvotes: 32,
    upvoted: false,
    downvoted: false,
    comments: [
      {
        submission:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        status: Status.Public,
        author: "adamj22",
        icon: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
        date: new Date("2022-03-04T03:24:00"),
        upvotes: 500,
        downvotes: 40,
        upvoted: false,
        downvoted: false,
      },
    ],
  },
  {
    id: 3,
    type: Type.Discussion,
    title: "Is Climbing Club Fun?",
    category: [Category.InterestGroups.PhysicalActivity],
    submission:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: Status.Anon,
    author: "johnnydoescs",
    icon: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    date: new Date("2022-10-24T03:24:00"),
    upvotes: 323,
    downvotes: 23,
    upvoted: false,
    downvoted: false,
    comments: [
      {
        submission:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        status: Status.Public,
        author: "adamj22",
        icon: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
        date: new Date("2022-03-04T03:24:00"),
        upvotes: 500,
        downvotes: 40,
        upvoted: false,
        downvoted: false,
      },
    ],
  },
  {
    id: 4,
    type: Type.Question,
    title: "What's happening near Rams?",
    category: [Category.MainCategories.Other],
    submission:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: Status.Public,
    author: "williamspage",
    icon: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    date: new Date("2022-11-23T03:24:00"),
    upvotes: 200,
    downvotes: 2,
    upvoted: false,
    downvoted: false,
    comments: [
      {
        submission:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        status: Status.Public,
        author: "adamj22",
        icon: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
        date: new Date("2022-03-04T03:24:00"),
        upvotes: 500,
        downvotes: 40,
        upvoted: false,
        downvoted: false,
      },
    ],
  },
];

export const postObjs = posts.map(
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
