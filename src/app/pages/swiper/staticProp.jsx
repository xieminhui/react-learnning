import { useRef } from "react";

const StatiPropscComponent = (props) => {
    const countRef = useRef(1);
    const testRef = useRef('test');
    console.log(countRef, testRef);
    return (
        <section>
            <div onClick={props.propFn}>{props.title}</div>
            <p>我被调用渲染了{countRef.current++}次</p>
        </section>
    )
}

export default StatiPropscComponent;