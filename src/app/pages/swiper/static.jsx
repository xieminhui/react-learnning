
// 注意这个变量是共享的，在每个引用该组件的时候，该变量是共享的
let count  = 1;

const StaticComponent = () => {
    return (
        <section>
            <div>我是不会变的组件</div>
            <p>我被调用渲染了{count++}次</p>
        </section>
    )
}

export default StaticComponent;