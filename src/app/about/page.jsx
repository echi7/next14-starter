import Image from "next/image"
import styles from "./about.modules.css"

const AboutPage = () => {
    return (
        <div>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
            </div>
        </div>
    )
}

export default AboutPage
