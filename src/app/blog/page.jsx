import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'



const BlogPage = async () => {

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
