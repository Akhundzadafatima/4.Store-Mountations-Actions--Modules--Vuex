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
  getters:{
    elektronlar:state=>state.things.filter(i=>i.type=="elektro")
  }
});
export default store;
