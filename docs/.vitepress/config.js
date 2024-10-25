import nav from './nav.js';
import sidebar from './sidebar.js';
export default {
    /**
     * 如果是username.github.io项目 base 可以不配置默认是 /
     * 
     */
    base:'/',
    lang: 'en-US',
    title: 'vitepress', //站点标题
    description: '一个vue3组件库',//mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
        //网站标题和loggo
        siteTitle: "vitepress",
        logo: "images/logo.png",
        //带图标的外链
        socialLinks: [
            { icon: "github", link: "https://gitee.com/geeksdidi" },
            { icon: "twitter", link: "..." },
            // You can also add custom icons by passing SVG as string:
            // {
            //   icon: {
            //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
            //   },
            //   link: "...",
            // },
          ],
        //导航栏
        nav:nav,
        sidebar:sidebar
    },
      
}