import { fetchG, fetchP } from '@/axios/http.js'

// 首页
function home(params) {
    return fetchG('home/home', params).then(res => res.data)
}
// 品牌列表
function brandList(params) {
    return fetchG('brand/brandList', params).then(res => res.data)
}
export {
    home,
    brandList
}
