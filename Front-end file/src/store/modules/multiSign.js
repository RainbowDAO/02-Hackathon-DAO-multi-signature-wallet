import getContract from '@/abi/index'

const state = {
    token: null,
    daoAddress: null
}
const mutations = {
    SET_DAOADDRESS(state, address) {
        state.daoAddress = address
    }
}

function judgeToken(rootState, address) {
    if (!state.token) state.token = getContract.getContractByToken("MultiSign",address, rootState.app.web3)
}

const actions = {
    getPendingTransactionById({rootState}, {
        address,
        idx
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.getPendingTransactionById(idx).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    getPendingTransactions({rootState}, {
        address,
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.getPendingTransactions().call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    signTransaction({rootState}, {
        address,
        transactionId,
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.signTransaction(transactionId).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    creatTransaction({rootState}, {
        address,
        token,
        to,
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.creatTransaction(token, to, 10).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    changeManage({rootState}, {
        address,
        account,
        tap
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.changeManage(  account, tap).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    changeSignature({rootState}, {
        address,
        num
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve) => {
            state.token.methods.changeSignature(num).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    getMultiSignAddr({rootState},index) {
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.getMultiSignAddr(rootState.app.account,index).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    managers({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.managers(rootState.app.account).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}

