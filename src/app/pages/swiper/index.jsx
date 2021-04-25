
import { useState, useEffect} from 'react';
// import {shuffle} from '../../utils'

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
            imgUrl: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/1e30e924b899a901aa55411415950a7b0208f5b4.jpg',
            id: 1
        },
        {
            imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2006287671,2688397669&fm=26&gp=0.jpg',
            id: 2
        },
        {
            imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3331665880,2001605345&fm=26&gp=0.jpg',
            id: 3
        }
    ]);
    const [init, changeInit] = useState(false)
    const [currentPage, changCurrentPage] = useState(1)
    useEffect(() => {
        const ret = deleteFirst(list);
        const data = pushData(ret);
        changeData(data);
    }, [currentPage])
    const getRenderStyle = (index) => {
        if(!init) return;
        if(currentPage === index + 1 ) {
            return {
                transform: 'translate(200px, 0px) rotate(30deg)',
                opacity: 0,
                transition: 'all 0.6s'
            }
        } else {
            return {
                background: 'red'
            }
            
        }
    }

    const change = () => {
        changCurrentPage(currentPage+1);
        changeInit(true);
    }

    const deleteFirst= (arr) => {
         arr.shift();
         return arr;
    }

    const pushData = (arr) => {
        let newItem = data[Math.random() > 0.5 ? 0 : 1];
        newItem.id = list[list.length-1].id + 1;
        arr.push(newItem);
        return arr;
    }

    return (
        <div className={styles['swiper-container']}>
            {
                list.map((v, i) => 
                    <Item key = { v.id } {...v} i = {i} style = {getRenderStyle(v.id)}></Item>
                )
            }
            <Button text="下一个" handleClick={() => change()}></Button>
        </div>
    )
}

export default Swiper;