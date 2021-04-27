let count  = 1;

const StatiPropscComponent = (props) => {
    return (
        <section>
            <div onClick={props.propFn}>{props.title}</div>
            <p>我被调用渲染了{count++}次</p>
        </section>
    )
}

export default StatiPropscComponent;