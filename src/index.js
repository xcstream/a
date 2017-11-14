Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

window.app = new Vue({
    el:'body>div',
    data: {
        activeIndex: '1',
        activeIndex2:'1',
        req_url:'/api',req_body:'',res_body:'',desc:'',
        newText:'',
        arr:[],
    },

    methods: {
        fmt (d){
            return d.Format('yyyy-MM-dd hh:mm:ss')
        },
        async request(){
            this.res_body =JSON.stringify(await (await fetch(this.req_url,{ method:"POST", credentials: 'include', headers: {'Accept': 'application/json', 'content-type':'application/json'}, body:JSON.stringify(this.req_body)})).json())
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        btn1(){
            app.arr.push({
                text:app.newText,
                time:new Date(),
            })
            app.newText = ''
        }
    }

})

if ('pushState' in history) {

    var strs = [
        '',
        '/ni',
        '/nico',
        '/niconi',
        '/niconico',
        '/niconiconi',
        '/~~~~~~~~~~~~'
    ]
    var count = 0
    setInterval(
        function () {
            if (count > strs.length) {
                count = 0
            }else {
                count ++
            }
            history.replaceState({}, null, strs[count])
        },100
    )
}
