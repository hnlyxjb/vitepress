import { defineConfig } from 'vitepress'

import { getSidebar } from "./utils/auto-gen-sidebar.mjs";	// 自动获取sidebar
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My notes",
  description: "我的文档",
  base: "/vitepress/",
  head: [
    ["link", { rel: "icon", href: "/vitepress/note.svg" }],
    // ["link", { rel: "stylesheet", href: "/vitepress/styles/custom.css" }],
  ],

  themeConfig: {
    logo: '/note.svg',
    outlineTitle: '本页内容', // 替换成你想要的标题
    outline: [2,6], // 开启大纲
    // https://vitepress.dev/reference/default-theme-config
    docFooter:{
      prev:'上一页',
      next:'下一页',
    },
    
    

    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '示例', items:[
        { text: '示例1', link: '/markdown-examples' },
        { text: '示例2', link: '/api-examples' },
      ] },
      { text: 'Git', link: '/Git/Git_work_sta_Repo' },
    ],
       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
              },
            },
          },
        },
      },
   
    sidebar: getSidebar() as any,
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:"Copyright © 2025 xiao"
    }

  },

})
