import { Comment } from "./comment";

export enum Type {
  Discussion = "Discussion",
  Question = "Q & A",
}

enum Academics {
  CampusResources = "Campus Resources",
  STEM = "STEM",
  Humanities = "Humanities",
}

enum Housing {
  OnCampus = "On Campus",
  OffCampus = "Off Campus",
}

enum Dining {
  OnCampus = "On Campus",
  Franklin = "Franklin",
  General = "General",
}

enum InterestGroups {
  Culture = "Culture & Religion",
  PhysicalActivity = "Physical Activity",
  Arts = "Arts",
  Fashion = "Fashion",
}

enum Miscellaneous {
  Rant = "Rant",
  Confession = "Confession",
}

enum MainCategories {
  Academics = "Academics",
  Housing = "Housing",
  Dining = "Dining",
  InterestGroups = "Interest Groups",
  Miscellaneous = "Miscellaneous",
  Other = "Other",
}

export class Category {
  static readonly MainCategories = MainCategories;
  static readonly Academics = Academics;
  static readonly Housing = Housing;
  static readonly Dining = Dining;
  static readonly InterestGroups = InterestGroups;
  static readonly Miscellaneous = Miscellaneous;
}

export enum Status {
  Anon = 0,
  Public = 1,
}
export class Post {
  private id: number;
  private type: Type;
  private category: Category[];
  private title: string;
  private submission: string;
  private status: Status;
  private author: string;
  private icon: string;
  private date: Date;
  private upvotes: number;
  private downvotes: number;
  private comments: Comment[];

  constructor(
    id: number,
    type: Type,
    category: Category[],
    title: string,
    submission: string,
    status: Status,
    author: string,
    icon: string,
    upvotes: number = 0,
    downvotes: number = 0
  ) {
    this.id = id;
    this.type = type;
    this.category = category;
    this.title = title;
    this.submission = submission;
    this.status = status;
    this.author = author;
    this.icon = icon;
    this.date = new Date();
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    this.comments = [];
  }

  changeStatus(s: Status) {
    if (this.status === Status.Anon) {
      this.status = Status.Public;
    } else {
      this.status = Status.Anon;
    }
  }

  addUpvote() {
    this.upvotes++;
  }

  removeUpvote() {
    this.upvotes--;
  }

  addDownvote() {
    this.downvotes++;
  }

  removeDownvote() {
    this.downvotes--;
  }

  editPost(s: string) {
    this.submission = s;
  }

  addComment(c: Comment) {
    this.comments.push(c);
  }

  removeComment(c: Comment) {
    this.comments = this.comments.filter((curr) => curr !== c);
  }

  addCategory(c: Category) {
    this.category.push(c);
  }

  removeCategory(c: Category) {
    this.category = this.category.filter((curr) => curr !== c);
  }
}
