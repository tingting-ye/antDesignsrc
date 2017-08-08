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
            name: '文字',
            url: '/draggable/text',
            children: [],
          }
        ],
      },
    ]
  }(window.$GLOBALCONFIG)
})()
