import { fetchG, fetchP } from '@/axios/http.js'

// 首页
function home(params) {
    return fetchG('home/home', params).then(res => res.data)
}
// 品牌列表
function brandList(params) {
    return fetchG('brand/brandList', params).then(res => res.data)
}
// 文章评论提交接口
function postArticleComment(params) {
    return fetchP('comments/addchaptcomment', params).then(res => res.data)
}
// 增加喜欢接口
function collect(params) {
    return fetchP('user/collectionGoods', params).then(res => res.data)
}

export {
    home,
    brandList,
    postArticleComment,
    collect
}
