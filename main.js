window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}
window.$ = window.jQuery
window.Promise = function(fn){
  return {
    then: function(){}
  }
}

window.jQuery.ajax = function({url,method,body,headers}){
  
  // let url = options.url
  // let method = options.method
  // let body = options.body
  // let success = options.success
  // let fail = options.fail
  // let headers = options.headers
  // let {url,method,body,success,fail,headers} = options
  //这6句let可用ES6的解构赋值语法替换，就是最后一句，也可以直接就写在参数中
  return new Promise(function(resolve, reject){//这六个单词是最重要的

    let request = new XMLHttpRequest()
    request.open(method,url)//配置request
    for(let key in headers){ //遍历对象中的属性
      let value = headers[key]
      request.setRequestHeader(key,value)
    }
    request.onreadystatechange = ()=>{
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
         resolve.call(undefined,request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined,request)
        }
      }
    }
    request.send(body)
  })

}



myButton.addEventListener('click',(e)=>{
  let promise = window.jQuery.ajax(
   {url:'/xxx',
   method:'post',
   headers:{
     'Content-Type':'x-www-form-urlencoded',
     'doudou':'18'
    }   
   })
   promise.then(
     (text)=>{console.log(text)},
     (request)=>{console.log(request)}
    )
})