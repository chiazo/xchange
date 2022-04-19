import {Category} from "../models/items.ts";
export const items = [
    {
        title: "UNC Sweatshirt",
        price: 10,
        picture: "file_path",
        category: Category.Clothing,
        seller: "chiazo42",
        date_posted: "04/14/2022",
        tags: ["blue", "small"],
        description: "description"
    },
    {
        title: "COMP 455 Textbook",
        price: 30,
        picture: "file_path",
        category: Category.School,
        seller: "Haritha56",
        date_posted: "04/10/2022",
        tags: ["like new", "hardback"],
        description: "description"
    }, 
    {
        title: "Mini Fridge",
        price: 50,
        picture: "some_string",
        category: Category.Home,
        seller: "Raven123",
        date_posted: "04/11/2022",
        tags: ["black", "Frigidaire"],
        description: "description"
    }, 
    {
        title: "Gel Manicure",
        price: 15,
        picture: "some_string",
        category: Category.Service,
        seller: "Diane590",
        date_posted: "04/13/2022",
        tags: ["nails", "acrylic"],
        description: "description"
    },
    {
        title: "Keurig",
        price: 20,
        picture: "some_string",
        category: Category.Home,
        seller: "Samantha_Har",
        date_posted: "04/09/2022",
        tags: ["pink", "small"],
        description: "description"
    },
    {
        title: "Senior Photos",
        price: 100,
        picture: "some_string",
        category: Category.Service,
        seller: "HannahB4",
        date_posted: "04/08/2022",
        tags: ["photography", "senior"],
        description: "description"
    }
]