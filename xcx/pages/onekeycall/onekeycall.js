const app = getApp()

Page({
  data: {
    pageNum: 1,
    pageSize: 10,
    total: 10, // 总记录数
  },
  onReachBottom () {
    if(this.data.pageNum * this.data.pageSize >= total) {
      wx.showToast({
        title: '已经到底了',
        icon: 'none'
      });
      return false;
    } else {
      this.setData({
        pageNum: ++this.data.pageNum
      });
      // this.getList();
    }
  },
  // 获取列表数据
  getList () {
    
  },

  onLoad (options) {

  }
})
