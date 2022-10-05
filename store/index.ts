interface State {
    inviteCode: string
    isAdmin: boolean
}

export const state = () => ({
    inviteCode: "",
    isAdmin: false
})

export const getters = {
    getInviteCode(state: State) {
        return state.inviteCode
    },
    checkAdmin(state: State) {
        return state.isAdmin
    }
}

export const mutations = {
    setInviteCode(state: State, inviteCode: string) {
        state.inviteCode = inviteCode
    }
}

export const actions = {
}
