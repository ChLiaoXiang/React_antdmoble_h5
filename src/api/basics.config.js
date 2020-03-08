let uniqid;

if(localStorage.getItem('uniqid')){
    uniqid = localStorage.getItem('uniqid');
}else{
    uniqid = localStorage.setItem('uniqid',Math.random()*10**15);
}

export default {
    baseURL: 'https://api.98523.cc/api/',
    maxContentLength: 2000,
    // 发送请求时头部信息
    headers: {
        'appid': '3',
        'uniqid': uniqid,
        'appversion': '1.0.0',
    },
    // 携带url 传入的数据 get
    params: {},
    // 携带参数传入 post
    data: {}
}