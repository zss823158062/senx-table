# senx-table
# 微信小程序 表格组件

```text
基于https://github.com/muzixiaojun/lrjTable 组件做的优化、修改；支持动态调整列宽，首列冻结、操作列冻结；左右滑动；按钮优化；表头固定；
slot action 固定按钮操作
btnName 按钮名
valueCallback 按钮返回值 如不设置则返回所在行索引和当前行数据
按钮绑定事件 btnClick
tr绑定事件 onRowClick
valueCallback tr返回值 如不设置则返回所在行索引和当前行数据
columns 数组 {
      key: '',
      title: '',
      width: 200,
      align: 'center',

      // 按钮默认 slot action
      slot: 'action'
      valueCallback: '',
      btnName: ''
    }
```
# 使用方法
1、引入 首先在要使用的页面中的json文件中配置如下：
```json
{
  "usingComponents": {
    "s-table": "/components/senx-table/senx-table"
  }
}
```
2、使用 在wxml页面需要用到的地方使用，如下：
```xml
<s-table columns="{{orderLinesData.columns}}" data="{{orderLinesData.data}}" height="500" marginTopValues="2"
         isScrollX bindbtnClick='orderLineDeleteBtnClick' bindrowClick='orderLineRowClick'/>
```
### 参数


| 其他参数 | 默认 |
| ------ | ------ |
| columns | th头部展示，object{}，必填 |
| data | Array[],接收的数据列表，必填 |
| height | tbody的高度 |
| width | table宽度 |
| isBorder | 是否带有纵向边框，默认true  |
| isStripe | 是否带有斑马条纹，默认true  |
| valueCallback | 自定义返回值key，默认返回全部  |
| msg | 无数据时展示信息  |
| isFixed | 固定thead，默认true  |
| isSocrllX | 固定横向滚动，默认false  |


**columns 对象**
| columns | 默认 |
| ------ | ------ |
| key | 对应data数据的关键词，必填 |
| title | th展示title，必填 |
| width | th自定宽度 |
| fixed | th 定位 |
| align | 默认center |
| slot | 模拟了一个按钮，但不是真的slot,只能填写action  |
| btnName | 设置slot的按钮名称  |


**事件名**
| 事件名 | 绑定事件 |参数|
| ------ | ------ | ------ |
| onRowClick | tr绑定事件 |{index,rowData}，当前行所在位置，当前行对象数据|
| btnClick | 自定义按钮绑定事件 |{index,rowData}，当前行所在位置，当前行对象数据|


**自定义css**
| css | 默认 |
| ------ | ------ |
| thead-row-class | th自定义样式 |
| tbody-tow-class | tr自定义样式 |
| td-class | td自定义样式 |
