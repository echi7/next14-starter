import styles from "./singlePost.module.css"

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/13070618/pexels-photo-13070618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Terry Jefferson</span>
                </div>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>01.01.2024</span>
                </div>
            </div>
            <div className={styles.content}>
                random sentence generated for this single post.
            </div>
        </div>
    )
}

export default SinglePostPage
