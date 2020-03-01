import { promisic } from "./util"

const getSystemSize = async function() {
  const res = await promisic(wx.getSystemInfo)()
  return {
    windowHeight: res.windowHeight,
    windowWidth:res.windowWidth,
    screenWidth: res.screenWidth,
    screenHeight: res.screenHeight,
  }
}

export {
  getSystemSize
}