import styles from './index.module.less'

const Item = (props) => (
    <section className={`${styles.swiper} ${styles[`swiper${props.i}`]}`} style={props.style}>
        <img className={`${styles.img}`} src= {props.imgUrl} alt="加载失败" />
        <p className={`${styles.des}`}>第{props.id}张</p>
    </section>
)

export default Item