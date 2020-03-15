export const UPDATE = "UPDATE"

export const updateAction = userInfo => ({type: UPDATE, data: userInfo})

const userInfoState = {
    userInfo: {}
}

const userInfo = (state = userInfoState, action) => {
  switch (action.type) {
    case UPDATE:  
      return {userInfo: action.data}
    default:
        return state
  }
}

export { userInfo }