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
export class Post {}
