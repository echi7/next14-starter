import styles from "./postUser.module.css"

const PostUser = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{post.usedId}</span>
        </div>
    )
}

export default PostUser
