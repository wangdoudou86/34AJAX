myButton.addEventListener('click',(e)=>{
  let request = new XMLHttpRequest()
  request.open('get','/xxx')//配置request
  request.send()
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log('请求响应完毕了')
      if(request.status >= 200 && request.status < 300){
        console.log('说明请求成功')
        console.log(request.responseText)
        let string = request.responseText
        let object = window.JSON.parse(string)
        //把符合JSON语法的字符串转换成JS对应的值，JSON.parse是浏览器提供的
        console.log(typeof object)
        console.log(object)
      }
    }
  }
})