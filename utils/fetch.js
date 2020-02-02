import { apiUrl } from './config.js'

// Header
const requestHeader = {
  'content-type': 'application/json', // 'application/x-www-form-urlencoded',
  'token': ''
}
// Header END

function MSG(msg) {
  wx.showToast({
    title: msg,
    duration: 2000
  })
}

function fetch(url, params = {}) {
  requestHeader.sessionid = getApp().globalData.sessionId

  const { method, data } = params

  return new Promise(function (resolve, reject) {
    const requestParams = {
      // url: apiUrl + url,
      url: url,
      header: requestHeader,
      success: function (res) {
        if (wx.hideLoading) {
          wx.hideLoading()
        } else {
          wx.hideNavigationBarLoading()
        }

        if (res.statusCode === 401 || res.data.recode === 401) {
          wx.navigateTo({
            url: '/pages/login/login'
          })
          reject(res)
          return
        }

        if (res.statusCode == 200 && res.data.recode === 200) {
          resolve(res.data)
        } else if (res.statusCode != 200) {
          // MSG('错误：' + res.statusCode)
          reject(res)
        } else {
          // MSG(res.data.msg)
          reject(res)
        }
      },
      fail: function (e) {
        reject(e)
      }
    }

    method && (requestParams.method = method)
    data && (requestParams.data = data)

    wx.request(requestParams)
  })
  
}

module.exports = fetch