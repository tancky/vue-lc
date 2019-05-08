import axios from 'axios'
import qs from 'qs'
import store from 'store/index'
import {Indicator, Toast} from 'mint-ui'

axios.defaults.timeout = 12000 // 请求超时时间
axios.defaults.baseURL = ''
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API

const conf = {
    app_key: 'wxxcx',
    v: '2.66',
    sig: 'a7f85170-6980-11e9-b273-e377221990e6'
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // post请求头的设置
// axios request拦截器
axios.interceptors.request.use(
    config => {
        // 可在此设置要发送的token
        // let token = store.getters['login/token'];
        // token && (config.headers.token = token)
        Indicator.open('正在加载...')
        return config
    },
    error => {
        return Promise.error(error)
    }
)
// axios response拦截器
axios.interceptors.response.use(
    res => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误 结合自身业务和后台返回的接口状态约定写respone拦截器
        Indicator.close()
        if (res.status === 200 && res.data.meta.status === 0) {
            return Promise.resolve(res)
        } else {
            Toast({
                message: res.data.data.alert_msg,
                position: 'middle',
                duration: 2000
            })
            return Promise.reject(res)
        }
    }, error => {
        Indicator.close()
        const responseCode = error.response.status
        switch (responseCode) {
            // 401：未登录
            case 401:
                Toast({
                    message: '未知错误!',
                    position: 'middle',
                    duration: 2000
                })
                break
            // 403：无访问权限
            case 403:
                Toast({
                    message: '权限不足,请联系管理员!',
                    position: 'middle',
                    duration: 2000
                })
                break
            // 404
            case 404:
                Toast({
                    message: '服务器被吃了⊙﹏⊙∥!',
                    position: 'middle',
                    duration: 2000
                })
                break
            default:
                Toast({
                    message: error.response.data.data.alert_msg,
                    position: 'middle',
                    duration: 2000
                })
        }
        return Promise.reject(error.response)
    }
)

/**
 * 封装get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function fetchG(url, params) {
    return axios.get(url, {
        params: Object.assign({}, conf, params)
    })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function fetchP(url, params) {
    return axios.post(url, qs.stringify({
        params: Object.assign({}, conf, params)
    }))
}

export {
    fetchG,
    fetchP
}
