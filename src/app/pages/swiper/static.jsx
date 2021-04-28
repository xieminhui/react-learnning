import { useRef } from "react";


const StaticComponent = () => {
    const countRef = useRef(1); 
    return (
        <section>
            <div>我是不会变的组件</div>
            <p>我被调用渲染了{countRef.current++}次</p>
        </section>
    )
}

export default StaticComponent;