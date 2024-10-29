import { createStore } from "vuex";
const store = createStore({
  state: {
    person: {
      name: "Fatima",
      surname: "Akhundzada",
      age: 21,
    },
    itemList: [
      {
        title: "xcdvfcbg",
      },
    ],
    things: [
      {
        id: 1,
        title: "phone",
        type: "elektro",
      },
      {
        id: 2,
        title: "apple",
        type: "fruit",
      },
      {
        id: 3,
        title: "computer",
        type: "elektro",
      },
    ],
    userList: ["Yusif", "Fatima", "Madina", "Karim"],
    fullName: "Madina Ağayeva",
    permissions: [1, 2, 3, 4, 5],
  },
mutations:{
  newItem(state, item){
    state.things.push(item)
},
},
actions:{
newItem(context, item){
  console.log("item:", item);
  
  setTimeout(()=>{
context.commit("newItem", item)
  }, 2000)
}
},
  getters:{
    elektronlar:state=>state.things,
    // elektronlar:state=>state.things.filter(i=>i.type=="elektro"),
    // fruits:state=>state.things.filter(i=>i.type=="fruit"),

    getSurname(state){
      return state.person.surname
    }
   }

});
export default store;
