import styles from "./singlePost.module.css"
import Image from "next/image"

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img}
                src="https://images.pexels.com/photos/13070618/pexels-photo-13070618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                fill
                />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Title</h1>
                    <div className={styles.detail}>
                        <Image
                        className={styles.avatar}
                        src="https://images.pexels.com/photos/13070618/pexels-photo-13070618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        width={50}
                        height={50}
                        />
                    </div>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Terry Jefferson</span>
                </div>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detailValue}>01.01.2024</span>
                </div>
            <div className={styles.content}>
            random sentence generated for this single post.
            </div>
            </div>
        </div>
    )
}

export default SinglePostPage
