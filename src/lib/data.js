import { Post } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find()

        return posts
    }catch(error){
        console.log(error)
        throw new Error("Failed to fetch posts!")
    }
};
export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.find({slug})

        return post;
    }catch(error){
        console.log(error)
        throw new Error("Failed to fetch post!")
    }
};
export const getUser = async (id) => {
    try {
        connectToDb();
        const user = await Post.find({id})

        return user
    }catch(error){
        console.log(error)
        throw new Error("Failed to fetch user!")
    }
};
export const getUsers = async () => {
    try {
        connectToDb();
        const users = await Post.find()

        return users
    }catch(error){
        console.log(error)
        throw new Error("Failed to fetch users!")
    }
};
