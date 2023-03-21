const app = getApp()

Page({
  data: {
    orderLinesData: {
      columns: [
          {key: 'product_name', title: '货物名称', width: 500},
          {key: 'measureunit_label', title: '计量单位'},
          {key: 'qty', title: '运输数量'},
          {key: 'pallet_qty', title: '托盘数'},
          {key: 'box_qty', title: '箱数'},
          {key: 'weight', title: '总重量'},
          {key: 'volume', title: '总体积'},
          {key: 'rate_weight', title: '计费重量'},
          {key: 'rate_volume', title: '计费体积'},
          {key: 'cargo_value', title: '总货值'},
          {key: 'heavyorbulky_label', title: '重抛货'},
          {key: 'currency_name', title: '币种'},
          {key: 'operation', title: '操作', slot: 'action', btnName: '删除'}
      ],
      data: []
  },
  },
  onLoad() {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
