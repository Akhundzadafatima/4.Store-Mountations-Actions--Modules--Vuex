import {createStore} from "vuex"
import taskmanager from "@/modules/taskmanager"
import contactMain from "@/modules/contactMain"
const store=createStore({
    state:{
        mainName:"Fatima"
    },
    modules:{
        contactMain,
        taskmanager
    }
})
export default store