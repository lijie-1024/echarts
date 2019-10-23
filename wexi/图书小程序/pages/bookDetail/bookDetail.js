// bookDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bookDetail: {},
      tags: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var book=JSON.parse(options.book);
    var title = book.name;
    this.requestData(book.id);
    wx.setNavigationBarTitle({
      title: title,
    })
  },
  requestData: function(bookId){
    var that=this;
      wx.request({
        url: 'http://www.kindlepush.com/m/auth/book/'+bookId,
        method: 'POST',
        header: {
          'auth': wx.getStorageSync('auth')
        },
        success: function(res){
          var tagsStr=res.data.book.tags;
          var tags=tagsStr.replace('[', '').replace(']', '').split(',');
          that.setData({
            bookDetail: res.data,
            tags: tags
          })
        },
        fail: function(err){
          console.log(err);
        }
      })
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