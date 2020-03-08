/*
 * action 类型
 */
export const MODELTYPE_LOGIN_REGISTER_FORGETPASSWORD = 'MODELTYPE_LOGIN_REGISTER_FORGETPASSWORD'

/*
 * action 创建函数
 */

// 控制登录模态框的状态
export function modelType_login_register_forgetword(parmas) {
    return {
        type: MODELTYPE_LOGIN_REGISTER_FORGETPASSWORD,
        parmas
    }
}