import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "智慧文旅",
  description: "智慧文旅",
  lastUpdated: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh_CN'
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: '更新日志',
        link: '/update-log',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '工程中心、讯飞工作室提供技术支持',
      copyright: 'Copyright © 2022 - 2025 红河学院人工智能产业学院'
    }
  }
})
