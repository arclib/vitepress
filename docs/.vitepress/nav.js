
const nav = [
    { text: "首页", link: "/" },
    {
        text: "工具",
        items: [
          {
            text: "开发工具",
            items: [
              { text: "IDEA", link: "/tools/" },
              { text: "Item A2", link: "/tools/idea/" },
            ],
          },
        //   {
        //     text: "工具2",
        //     items: [
        //       { text: "Item B1", link: "/item-B1" },
        //       { text: "Item B2", link: "/item-B2" },
        //     ],
        //   },
        ],
    },
    { text: "guide", link: "/guide/" },
    { text: "guidetest", link: "/guide/test" },
    // 我们还可以这样嵌套配置，使得导航栏出现下拉选项
    {
        text: "Drop Menu",
        items: [
            { text: 'Item A', link: '/item-1' },
            { text: 'Item B', link: '/item-2' },
            { text: 'Item C', link: '/item-3' }
        ]
    },
    //如果我们想要让下拉选项分组，即中间有条分割线，我们的nav可以这样写
    // {
    //     text: "Drop Menu",
    //     items: [
    //       {
    //         items: [
    //           { text: "Item A1", link: "/item-A1" },
    //           { text: "Item A2", link: "/item-A2" },
    //         ],
    //       },
    //       {
    //         items: [
    //           { text: "Item B1", link: "/item-B1" },
    //           { text: "Item B2", link: "/item-B2" },
    //         ],
    //       },
    //     ],
    // },
    
]
export default nav;