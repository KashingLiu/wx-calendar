Page({

    data: {
        value: '2018-11-11',
        week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        lastMonth: 'lastMonth',
        nextMonth:'nextMonth',
        selectVal: '',
        disable_date: ["2020-05-19","2020-05-20"]
    },

    //组件监听事件
    select(e) {
        // console.log(e)
        this.setData({
            selectVal:e.detail
        })
    },

    toggleType(){
        this.selectComponent('#Calendar').toggleType();
    }


})
