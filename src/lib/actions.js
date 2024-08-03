"use server"

import { connectToDb } from "./utils";
import { Post } from "./models"
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
    "use server"

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try{
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        revalidatePath("/blog")
        console.log("save to Db")
    } catch(error) {
        return {error: "something went wrong"}
    }
};

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try{
        connectToDb()
        await Post.findByIdAndDelete(id);
        console.log("deleted from db")
        revalidatePath("/blog")
    } catch(error) {
        return {error: "something went wrong"}
    }
};
