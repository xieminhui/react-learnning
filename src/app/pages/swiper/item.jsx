import styles from './index.module.less'

const Item = ({imgUrl =' ', i}) => (
    <section className={`${styles.swiper} ${styles[`swiper${i}`]}`}>
        <img className={`${styles.img}`} src= {imgUrl} alt="加载失败" />
    </section>
)

export default Item