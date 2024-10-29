<template>
  <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem consequuntur amet natus et, unde libero sint eveniet! Numquam neque doloribus fuga quaerat voluptatum fugit. Ratione ipsa deleniti repellendus vitae nemo.</p>
 <p>{{ $store.state.person }}</p>
 {{ $store.state.fullName }} <button @click="updateName">Change</button>
 <ul>
  <li v-for="user in $store.state.userList" :key="user">{{ user }}</li>
 </ul>
 <ul>
  <li v-for="item in $store.state.itemList" :key="item">{{ item }}</li>
 </ul>

 <ul>
  <li v-for="(item, index) in $store.getters.elektronlar" :key="index">{{ item }}</li>
 </ul> -->
  <div>
    <!-- {{ $store.getters.getSurname }} -->

    {{ getSurname }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    updateName() {
      this.$store.state.fullName = "Karim Axundzada";
      this.$store.state.userList.push(new Date().getTime());
      this.$store.state.itemList.push({ title: "sfdcghskj" });
    },
  },

computed:{
  ...mapGetters(["getSurname"])
},
  mounted() {
    console.log("this.store", this.$store.getters.getSurname);
  },
};
</script>
