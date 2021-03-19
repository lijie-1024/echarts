// home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    books: [
      { header: {name: "精品图书"}, books: [] },
      { header: {name: "随便看看"}, books: [] },
      { header: {name: "最新上架"}, books: [] },
    ],
    menus: [
      { "imgUrl": "/images/menu/rank.png", "name": "榜单" },
      { "imgUrl": "/images/menu/category.png", "name": "分类" },
      { "imgUrl": "/images/menu/list.png", "name": "书单" },
      { "imgUrl": "/images/menu/active.png", "name": "活动" }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // this.requestData();
    that.setData({
      banners: [],
      'books[0].books': '',//注意加引号
      'books[1].books': '',
      'books[2].books': '',
    });
  },
  requestData: function () {
    var that = this;
    // wx.request({
    //   // url: 'http://www.kindlepush.com/app/getIndexInfo',
    //   // success: function (res) {
    //     //console.log(res.data.hotBookList);
    //     // that.data.banners = res.data.pictureList;
    //     // that.data.books[0].books = res.data.goodBookList;
    //     // that.data.books[1].books = res.data.hotBookList;
    //     // that.data.books[2].books = res.data.newBookList;
        
    //     //以上方式不可以
    //     // that.setData({
    //     //   banners: res.data.pictureList,
    //     //   'books[0].books': res.data.goodBookList,//注意加引号
    //     //   'books[1].books': res.data.hotBookList,
    //     //   'books[2].books': res.data.newBookList,
    //     // });
    //   // },  
    //   fail: function (err) {
    //     console.log(err);
    //   }
    // });
  },
  toDetail:function(event){
      var book = event.currentTarget.dataset.book;
      wx.navigateTo({
        url: '/pages/bookDetail/bookDetail?book='+JSON.stringify(book),
      })
  },
  toHotPush: function(event){
    var index=event.currentTarget.dataset.index;
    if (index==0){
      wx.navigateTo({
        url: '/pages/hotPush/hotPush',
      })
    }else{
      wx.showToast({
        title: '暂无此功能!',
        duration: 1000,

      })
    }
    
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