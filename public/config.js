export default (() => {
  window.$GLOBALCONFIG = {};
  +function (global) {
    global.NAVIGATION = [
      {
        id: 1,
        name: '首页',
        url: '/',
        children: [],
      }, {
        id: 2,
        name: '拖拽功能',
        url: '/draggable',
        children: [
          {
            id: 21,
            name: '文字',
            url: '/draggable/text',
            children: [],
          },
          {
            id: 22,
            name: '表格',
            url: '/draggable/table',
            children: [],
          },
          {
            id: 23,
            name: '标签',
            url: '/draggable/label',
            children: [],
          }
        ],
      }, {
        id: 3,
        name: '轮播功能',
        url: '/carousel',
        children: [
          {
            id: 31,
            name: '默认',
            url: '/carousel/default',
            children: [],
          },
        ],
      }, {
        id: 4,
        name: '其他',
        url: '/other',
        children: [
          {
            id: 41,
            name: '表格处理',
            url: '/other/datasheet',
            children: [],
          },
        ],
      }
    ]
  }(window.$GLOBALCONFIG)
})()
