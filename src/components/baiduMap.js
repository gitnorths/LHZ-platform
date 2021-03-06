export function baiduMap(ak) {
  return new Promise(function (resolve, reject) {
    window.baiduMap = function () {
      resolve()
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://api.map.baidu.com/api?v=2.0&ak=${ ak }&callback=baiduMap`
    script.onerror = reject
    document.head.appendChild(script)
  })
}