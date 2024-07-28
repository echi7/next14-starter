import Image from "next/image"
import styles from "./about.modules.css"

const AboutPage = () => {
    return (
        <div>
            <div className={styles.imgContainer}>
                <Image src="https://www.pexels.com/photo/esb-among-lower-skyscrapers-24460824/" alt="" fill/>
            </div>
        </div>
    )
}

export default AboutPage
