class Lazy_loading {
    //图片地址-和图片的宽度
    constructor(src, wid) {
        this.src = src;
        this.wid = wid;
    }
    //定义方法打开加载中的样式
    Lazy_loading_open() {
        //创建一个div
        var mydiv = document.createElement('div')
        //创建一个class属性
        var myclassdiv = document.createAttribute('class')
        //属性zhi
        myclassdiv.value = 'mydiv'
        //将属性节点添加到div
        mydiv.setAttributeNode(myclassdiv)
        //将div添加到body中
        document.getElementsByTagName('body')[0].appendChild(mydiv)
        //获取div
        var mydiv_loading = document.querySelector('.mydiv')
        mydiv_loading.innerHTML = `<img src="${this.src}" style="width: ${this.wid}px;" />`
        //给div添加样式
        mydiv_loading.style.position = 'absolute'
        mydiv_loading.style.left = '50%'
        mydiv_loading.style.top = '50%'
        mydiv_loading.style.transform = 'translate(-50%)'
        mydiv_loading.style.zIndex = 1000
    }
    //定义一个方法关闭样式
    Lazy_loading_close() {
        //获取div
        var mydiv_loading = document.querySelector('.mydiv')
        var parent = mydiv_loading.parentNode
        parent.removeChild(mydiv_loading)
    }

}
export default Lazy_loading
//使用参考
// function fn(a) {
//     var Lazy_loading_s = new Lazy_loading('./img/loading.7e352f88.gif', 100)

//     if (a == 0) {
//         Lazy_loading_s.Lazy_loading_close()
//     } else if (a == 1) {
//         Lazy_loading_s.Lazy_loading_open()
//     }

// }
