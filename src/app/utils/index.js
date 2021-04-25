/*
 * @Author: your name
 * @Date: 2021-04-25 11:22:29
 * @LastEditTime: 2021-04-25 11:24:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-learnning\src\app\utils\index.js
 */

export function shuffle (arr) {
    return arr.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
}