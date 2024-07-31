import styles from "./postCard.module.css"
import Link from "next/link"
import Image from "next/image"

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/13070618/pexels-photo-13070618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>this is a detail of this blog post. There are new things happening here and its important to read about!</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard
