
import { useState } from 'react';
import {shuffle} from '../../utils'

import Item from './item'
import Button from '../../component/Button'

import styles from './index.module.less'

const Swiper = () => {
    const data = [
        {
            imgUrl: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/1e30e924b899a901aa55411415950a7b0208f5b4.jpg'
        },
        {
            imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2006287671,2688397669&fm=26&gp=0.jpg'
        },
        {
            imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3331665880,2001605345&fm=26&gp=0.jpg'
        }
    ];
    const [list, changeData] = useState([
        {
            imgUrl: 'https://th.bing.com/th/id/R61c7193acb2da97b8e3bf263a679000e?rik=MEDPVg6mouoAGg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f131226%2f1-131226222342.jpg&ehk=MX8xKkMzrBhPZnUNCDf9w0A1AbUr2vqut9ZklZBukMs%3d&risl=&pid=ImgRaw'
        },
        {
            imgUrl: 'https://th.bing.com/th/id/R788a3ca3fc34a8f457b6a9a582cbebd6?rik=Nlwza%2bi%2f1I2W4Q&riu=http%3a%2f%2fimg.pptjia.com%2fimage%2f20180117%2f16e6d1b2adcb7796e411899957f5f686.jpg&ehk=4%2bqM6f6DYFdLm6Cu4IPioBdsQT5fiqSYmQ073igic8Y%3d&risl=&pid=ImgRaw'
        },
        {
            imgUrl: 'https://th.bing.com/th/id/Rc3d7a0980556453c518fc54e8c31d376?rik=ePW3dX%2b1EZOTDQ&riu=http%3a%2f%2fpicture.ik123.com%2fuploads%2fallimg%2f190126%2f4-1Z126160118.jpg&ehk=lhYfiFZaHVUdi8YdB0mZ2QX5pnQhtOsiGY%2brRiDMunc%3d&risl=&pid=ImgRaw'
        }
    ]);

    const change = () => {
        const arr = shuffle(data);
        changeData(arr);
    }

    return (
        <div className={styles['swiper-container']}>
            {
                list.map((v, i) => 
                    <Item key = { i } {...v} i={i}></Item>
                )
            }
            <Button text="下一个" handleClick={() => change()}></Button>
        </div>
    )
}

export default Swiper;