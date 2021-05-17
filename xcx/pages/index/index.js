// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    type: 0, // 0-系统消息 1-模块消息
    typeId: 0, // 类型Id
    pageNum: 1,
    pageSize: 10,
    total: 1,
    datalist: [
      {id: 1, content: "我是内容", createDate: "456", title: '保护环境，人人有责'},
      {id: 2, content: "我是内容", createDate: "456", title: '保护环境，人人有责'},
      {id: 3, content: "我是内容", createDate: "456", title: '保护环境，人人有责'},
      {id: 4, content: "我是内容", createDate: "456", title: '保护环境，人人有责'},
      {id: 5, content: "我是内容", createDate: "456", title: '保护环境，人人有责'},
      {id: 6, content: "我是内容", createDate: "456", title: '保护环境，人人有责'},
      {id: 7, content: "我是内容", createDate: "456", title: '保护环境，人人有责'}
    ],
    isBottom: false, // 是否已到底
    isLoading: false, // 是否加载中
  },
  // 消息时间解析
  parseDate (time) {

  },
  onReachBottom () {
    if(this.data.isBottom) {
      return false;
    }
    if(this.data.pageNum * this.data.pageSize < this.data.total) {
      this.setData({
        pageNum: this.data.pageNum+1,
        isLoading: true
      });
      this.getDataList('push');
    } else {
      // 已经到底了
      this.setData({
        isLoading: true
      });
      setTimeout(() => {
        this.setData({
          isLoading: false,
          isBottom: true
        });
      },1000);
    }
  },
  // 获取列表数据
  getDataList (way) {
    // concat or noConcat
  },
  onLoad(options) {

  }
})
