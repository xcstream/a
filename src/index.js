
window.app = new Vue({
    el:'body>div',
    data: {
        activeIndex: '1',
        activeIndex2:'1',
        req_url:'/api',req_body:'',res_body:'',desc:''
    },

    methods: {
        async request(){
            this.res_body =JSON.stringify(await (await fetch(this.req_url,{ method:"POST", credentials: 'include', headers: {'Accept': 'application/json', 'content-type':'application/json'}, body:JSON.stringify(this.req_body)})).json())
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }

})