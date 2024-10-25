import { log } from 'console';
import fs from 'fs';
import path from 'path';

/**
 * 如果为true
 * 文件夹和文件名称为 '<三位数字>-[文件名称|文件夹名称]' 会自动去掉 '<三位数字>-' 没有的话文件夹和文件不会显示
 * 如果为false
 * 文件名称和文件夹名称不会处理，完整显示
 */
const isUserNumber = true;
//侧边栏收起选项 默认为 false;
const collapsed = false;


const sidebar = {
  "tools": getdirs('tools'),
  "test":getdirs('test')
}


/**
 * 校验文件夹名称是否符合 000-文件名 的格式
 * @param {string} name - 名称
 * @returns {boolean} - 如果文件夹名称符合格式，返回 true；否则返回 false
 */
function isValidName(name) {
   //不使用序号不处理
   if(!isUserNumber){
    return true;
  }
  const regex = /^\d{3}-.+$/;
  return regex.test(name);
}

/**
 * 读取指定文件夹内的内容
 * @param {string} dir - 要读取的文件夹路径
 * @param {number} isReadType - 读取类型，0 表示读取文件夹，1 表示读取文件
 * @param {string} filter - 过滤条件，多个文件或文件夹名称，以逗号分隔
 * @returns {string[]} - 返回符合条件的文件或文件夹名称数组
 */
function readDirectorySync(dir,isReadType = 1) {
  try {

    dir = path.join(__dirname , '../' , dir);
    const filter = 'index.md,assets'
    // 解析过滤条件
    const filterArray = filter.split(',').map(name => name.trim());
    // console.log(dir)
    // 读取文件夹内容
    const entries = fs.readdirSync(dir, { withFileTypes: true });
 
    // 过滤并列出所有符合条件的文件或文件夹
    const filteredEntries = entries.filter(entry => {
      // 检查名称是否在过滤条件中
      if (filterArray.includes(entry.name)) {
        return false;
      }
      // 检查读取类型
      if (isReadType === 0) {
        return entry.isDirectory() && isValidName(entry.name);
      } else if (isReadType === 1) {
        // 检查文件后缀是否为 .md
        return entry.isFile() && entry.name.endsWith('.md') && isValidName(entry.name);
      }

      return false;
    }).map(entry => {
      // 如果是文件，去掉 .md 后缀
      if (isReadType === 1) {
        return entry.name.slice(0, -3);
      }
      return entry.name;
    });

    return filteredEntries;
  } catch (err) {
    console.error('读取文件夹或文件时出错：', err);
    throw err;
  }
}

function getItems(path){
  const mdFiles = readDirectorySync(path);
  const result = mdFiles.map((name, index) => ({
    text: isUserNumber ? name.split('-')[1] : name,
    link: path+'/'+name,
  }));
   console.log(path+'符合条件的文件列表：', result);
  return result;
}

//001根据路径组装侧边栏
function getdirs(path){
  const dirs = readDirectorySync(path,0);

  // console.log(dirs)
  const result = dirs.map((name, index) => ({
    text:  isUserNumber ? name.split('-')[1] : name,
    items: getItems(path + '/' + name),
    collapsed: collapsed,
  }));

  const index = {
    link: '/'
  }
  
  result.push(index)
  return result;
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