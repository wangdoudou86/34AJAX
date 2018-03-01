window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  return nodes
}
window.jQuery.ajax = function(url,method,body,success,fail){
  let request = new XMLHttpRequest()
  request.open(method,url)//配置request
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
       success.call(undefined,request.responseText)
      }else if(request.status >= 400){
        fail.call(undefined,request)
      }
    }
  }
  request.send(body)
}

window.$ = window.jQuery

myButton.addEventListener('click',(e)=>{
  window.jQuery.ajax(
   '/xxx',
   'post',
   'a=1&&b=2',
   ()=>{console.log(1)},
   ()=>{console.log(2)}
  )
})