// bookMall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.requestData();
  },
  requestData: function () {
    var that = this;
    wx.request({
      url: 'http://www.kindlepush.com/m/categorys',
      success: function (res) {
        console.log(res.data)
        var categories=[];
        for (var i = 1; i < res.data.length; i++){
          var category={};
          category["name"]=res.data[i].name;
          var imgUrl = "/images/store/"+i +"_112x112_@3x.png";
          category["imgUrl"]=imgUrl;
          categories.push(category);
        };
        // res.data.splice(0, 1);
        that.setData({
          categories: categories
        })
      },
      fail: function (err) {
        console.log(err);
      }
    });
  },
  toBookList: function(event){
    var categoryId = event.currentTarget.dataset.categoryid;
    var categoryName = event.currentTarget.dataset.categoryname;
    wx.navigateTo({
      url: '/pages/allBook/allBook?categoryId=' + categoryId + '&categoryName=' + categoryName,
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