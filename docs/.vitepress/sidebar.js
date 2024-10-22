/**
 * 侧边栏处理
 * 
 * 
 * 
 * 
 * 
 */
const fs = require('fs');
const path = require('path');


// 指定要读取的文件夹路径
const directoryPath = path.join(__dirname, '../tools/idea/');
console.log(directoryPath);
// 读取文件夹内容
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('无法扫描目录：' + err);
  } 

  // 列出所有文件
  files.forEach(file => {
    console.log(file);
  });
});





console.log();


const sidebar = {
                    
                    "/tools/": [
                        {
                            text: "IDEA",
                            items: [
                            { text: "简介",link: "/tools/idea/简介",},
                            { text: "常用配置",link: "/tools/idea/常用配置",},
                            { text: "常用快捷键", link: "/tools/idea/常用快捷键" },
                            { text: "常用插件", link: "/tools/idea/常用插件" },
                            ],
                        },
                        {
                            text: "vue教程",
                            items: [
                            {
                                text: "pina和vuex",
                                link: "/articles/pina和vuex",
                            },
                            ],
                        },
                        ],

                }
export default sidebar;

 //侧边栏 默认显示  
        // sidebar: [
        //     {
        //       text: "mac",
        //       items: [
        //         {
        //           text: "问题记录",
        //           link: "/articles/",
        //         },
        //         { text: "gulp的使用", link: "/articles/gulp的使用" },
        //       ],
        //     },
        //     {
        //       text: "vue教程",
        //       items: [
        //         {
        //           text: "pina和vuex",
        //           link: "/articles/pina和vuex",
        //         },
        //       ],
        //     },
        // ],