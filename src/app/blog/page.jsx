import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getData } from "@/lib/data";

const getData = async () => {
    constres = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

    if(!res.ok) {
        throw new Error("something went wrong");
    }
    return res.json()
}


const BlogPage = async () => {

    const posts = await getData();

    return (
        <div className={styles.container}>
        {posts.map((post) => (
            <div className={styles.post} key={post.id}>
                <PostCard post={post}/>
            </div>
        ))}
        </div>
    )
}

export default BlogPage
