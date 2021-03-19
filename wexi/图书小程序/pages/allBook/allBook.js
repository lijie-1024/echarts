// allBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allBooks: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var categoryId = options.categoryId;
    var categoryName = options.categoryName;

    this.requestData(categoryId);
    wx.setNavigationBarTitle({
      title: categoryName,
    })
  },
  requestData: function (categoryId) {
    var that=this;
    wx.request({
      url: 'http://www.kindlepush.com/m/good/c/'+categoryId+'/1',
      success: function (res) {
        console.log(res.data);
        that.setData({
          allBooks: res.data
        })
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
  toDetail: function(event){
    var book=event.currentTarget.dataset.book;
    wx.navigateTo({
      url: '/pages/bookDetail/bookDetail?book='+JSON.stringify(book),
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