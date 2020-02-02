const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const showToast = (o) => {
  const options = {
    title: '成功',
    icon: 'none',
    duration: 2000
  }

  wx.showToast({ ...options, ...o})
}

const showModal = (o) => {
  const options = {
    title: '提示',
    content: '成功',
    cancelColor: '#333333',
    confirmColor: '#fb7422'
  }
  wx.showModal({ ...options, ...o })
}

module.exports = {
  formatTime,
  showToast,
  showModal
}
