import { createStore, combineReducers } from "redux";
import { userInfo } from "./userInfo";

// 全局你可以创建多个reducer 在这里统一在一起
const rootReducers = combineReducers({userInfo})
// 全局就管理一个store
export const store = createStore(rootReducers)