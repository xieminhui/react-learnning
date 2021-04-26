
import { useState, useEffect } from 'react';
// import {shuffle} from '../../utils'

import Item from './item'
import Button from '../../component/Button'

import styles from './index.module.less'

let cycleId = 3;

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

function fetchMock () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 100);
    })
}

const Swiper = () => {
    const [init, changeInit] = useState(false)
    const [animationEnd, changeAnimation] = useState(false)
    const [currentPage, changCurrentPage] = useState(1)
    const [list, changeData] = useState([]);
    useEffect(() => {
        // 模拟http请求
        async function fetchData() {
            // You can await here
            const ret = await fetchMock();
            const initList = ret.map((v ,i)=> {
                let obj = Object.assign({}, v);
                obj.id = i + 1;
                return obj;
            })
            changeData(initList);
          }
          fetchData();
    }, [])
    const getRenderStyle = (index) => {
        if(!init) return;
        if(currentPage === index + 1 ) {
            return {
                transform: 'translate(200px, 0px) rotate(30deg)',
                opacity: 0,
                transition: 'all 0.6s'
            }
        } else {
            return {}
        }
    }

    const change = () => {
        if(animationEnd) return;
        changCurrentPage(currentPage+1);
        changeAnimation(true);
        changeInit(true);
        changeList();
    }

    const changeList = () => {
        setTimeout(() => {
            const ret = deleteFirst(list);
            const data = pushData(ret);
            changeData(data);
            changeAnimation(false);
        }, 600);
    }

    const deleteFirst= (arr) => {
         arr.shift();
         return arr;
    }

    const pushData = (arr) => {
        let newItem = data[cycleId%3];
        newItem.id = list[list.length-1].id + 1;
        arr.push(newItem);
        cycleId++;
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