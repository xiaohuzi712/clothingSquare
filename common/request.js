function getInfo(url,data,header,method){
 var that = this
 var info
 wx.request({
    url: url, 
    data:data,
    header: header,
    method:method,
    success(res) {
    }
  })
}
module.exports.getInfo = getInfo