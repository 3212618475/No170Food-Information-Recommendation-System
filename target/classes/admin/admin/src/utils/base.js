const base = {
    get() {
        return {
            url : "http://localhost:8080/meishixinxituijianxitong/",
            name: "meishixinxituijianxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/meishixinxituijianxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "美食信息推荐系统"
        } 
    }
}
export default base
