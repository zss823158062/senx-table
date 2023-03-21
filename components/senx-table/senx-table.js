/**
 * 基于https://github.com/muzixiaojun/lrjTable 组件做的优化、修改；支持动态调整列宽，首列冻结、操作列冻结；左右滑动；按钮优化；表头固定；
 * slot action 固定按钮操作
 *  btnName 按钮名
 * valueCallback 按钮返回值 如不设置则返回所在行索引和当前行数据
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
 **/
Component({
    options: {
        multipleSlots: true,
    },
    // 自定义外部样式class  th头部样式           tr样式           td样式
    externalClasses: ['thead-row-class', 'tbody-tow-class', 'td-class'],
    properties: {
        // td 数组
        data: {
            type: Array,
            value: []
        },
        // thead 数组
        columns: {
            type: Array,
            value: []
        },
        // table 高度
        height: {
            type: String,
            value: 'auto'
        },
        // table 宽度
        width: {
            type: Number || String,
            value: 750
        },
        // 是否带有纵向边框
        isBorder: {
            type: Boolean,
            value: true
        },
        // 是否带有斑马条纹
        isStripe: {
            type: Boolean,
            value: true
        },
        // tr 返回值Key
        valueCallback: {
            type: String,
            value: ''
        },
        // 无数据时信息
        msg: {
            type: String,
            value: '暂无数据~'
        },
        // thead 固定
        isFixed: {
            type: Boolean,
            value: false
        },
        // 是否固定首列
        isFixedFistColumn:{
          type: Boolean,
          value: true
        },
        // 内边距
        marginTopValues: {
            type: Number || String,
            value: 0
        },
        // 是否允许横向滚动
        isScrollX: {
            type: Boolean,
            value: false
        }
    },
    data: {
        marginTopValue: 0,
        leftWidth: 0,
        leftIndex: 0,
        rightWidth: 0,
        rightIndex: 0,
        isOperation: false
    },
    // 生命周期
    lifetimes: {
        // 组件实例进入页面节点树时调用
        attached() {
            let isHavingOperation = this.properties.columns.filter(item => item.slot).length > 0;
            this.setData({
                isOperation: isHavingOperation
            })
            const scrollWidth = this.properties.columns.reduce((pre, cur) => pre + (cur.width ? cur.width : 200), 0);
            this.createSelectorQuery().selectAll(".thead .td").boundingClientRect((res) => {
                this.properties.columns.map(item => {
                    item.width = item.width / scrollWidth * this.properties.width
                })
            }).exec(res => {
                let list = this.properties.columns;
                this.setData({
                    columns: [...list]
                })

            })
        },
    },
    methods: {
        onRowClick(e) {
            // 优化
            if (e.target.id === "tableRow") {
                this.triggerEvent('rowClick', e.target.dataset)
            }
        },
        onBtnClick(e) {
            if (e.target.id === "slotBtn") {
                this.triggerEvent('btnClick', e.target.dataset)
            }
        }
    },
})
