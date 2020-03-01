// import { Theme } from "../../models/theme"
// import { Banner } from "../../models/banner"
// import { Category } from "../../models/category"
// import { Activity } from "../../models/activity"
// import { SpuPaging } from "../../models/spu-paging"

// pages/home/home.js

// import {config} from "../../config/config";

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    
      this.initAllData()

      this.initBottomSpuList()
  },

  async initBottomSpuList(){


    console.log("初始化底部商品列表")

  },

  async initAllData(){

    console.log("初始化首页数据")

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
  onReachBottom: async function () {


    // const data = await this.data.spuPaging.getMoreData()
    // if(!data){
    //   return
    // }
    // wx.lin.renderWaterFlow(data.items)
    // if(!data.moreData){
    //   this.setData({
    //     loadingType: 'end'
    //   })
    // }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})