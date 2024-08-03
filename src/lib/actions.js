import { connectToDb } from "./utils";

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
        console.log("save to Db")
    } catch(error) {
        console.log('something went wrong')
        return {error: "something went wrong"}
    }
};
