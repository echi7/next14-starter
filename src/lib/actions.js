"use server"

import { connectToDb } from "./utils";
import { Post, User } from "./models"
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";

export const addPost = async (formData) => {

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

export const handleGithubLogin = async () => {
    await signIn("github");
};

export const handleLogout = async () => {
    await signOut();
};

export const register = async (formData) => {
    const { username, email, img, password, passwordRepeat } = Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return "Passwords do not match!";
    }

    try{
        connectToDb();

        const user = await User.findOne({username});
        if (user) {
            return "Username already exists";
        }


        const newUser = new User({
            username,
            email,
            password,
            img,
        });
        await newUser.save();
        console.log("saved to db");
    } catch (err) {
        console.log(err);
        return {error: "Something went wrong!"};
    }
}
