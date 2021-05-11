// pages/calldetail/calldetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    successpage: false, // 呼叫成功或者失败的详情页
    successItemList: [
      {name: '护士', key: 'name'},
      {name: '性别', key: 'sex'},
      {name: '手机号', key: 'phone'},
      {name: '到达时间', key: 'arriveTime'},
      {name: '呼叫时间', key: 'callTime'},
      {name: '呼叫用时', key: 'payTime'}
    ],
    successObjData: {
      name: '张晓丽',
      sex: '女',
      phone: '15856381576',
      arriveTime: '2021/01/01 00:00:00',
      callTime: '2021/01/01 00:00:00',
      payTime: '85s'
    },
    failObjData: {
      callTime: '2021/01/01 00:00:00',
      payTime: '85s'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})