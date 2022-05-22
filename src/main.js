/*
 * @Author: lucky_blue 1627469727@qq.com
 * @Date: 2022-05-22 21:16:44
 * @LastEditors: lucky_blue 1627469727@qq.com
 * @LastEditTime: 2022-05-22 22:06:43
 * @FilePath: \03_learn_component\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './01_组件的拆分和嵌套/App.vue'

// import {sum} from './12_异步组件的使用/utils/math';

// console.log(sum(20, 30));

// 通过import函数导入的模块, 后续webpack对其进行打包的时候就会进行分包的操作
// import("./12_异步组件的使用/utils/math").then((res) => {
//   console.log(res.sum(20, 30))
// })

createApp(App).mount('#app')
