import styles from './index.module.less'

const Item = (props) => (
    <section className={`${styles.swiper} ${styles[`swiper${props.i}`]}`}>
        <img className={`${styles.img}`} src= {props.imgUrl} alt="加载失败" />
    </section>
)

export default Item