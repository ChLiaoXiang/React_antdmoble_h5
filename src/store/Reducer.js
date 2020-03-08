import {
    MODELTYPE_LOGIN_REGISTER_FORGETPASSWORD
} from './actions'

const dataList = {
    loginPage: {
        loginModel: true,
        registerModel: false,
        forgetModel: false
    },
    registerPage: {
        loginModel: false,
        registerModel: true,
        forgetModel: false
    },
    forgetPassword: {
        loginModel: false,
        registerModel: false,
        forgetModel: true
    },
    clearModel: {
        loginModel: false,
        registerModel: false,
        forgetModel: false
    },
    modelType: {
        loginModel: false,
        registerModel: false,
        forgetModel: false
    }
}

function reducer(state = dataList, action) {
    switch (action.type) {
        case MODELTYPE_LOGIN_REGISTER_FORGETPASSWORD:
            state.modelType = { ...action.parmas }
            return { ...state }
        default:
            return state
    }
}


export default reducer