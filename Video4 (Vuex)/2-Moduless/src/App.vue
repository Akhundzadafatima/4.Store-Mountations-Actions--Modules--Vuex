<template>
  <div>
    <input type="text" v-model="menimTestDatam" @keydown.enter="test()">
    <button @click="test()">click</button>
  </div>
  {{ $store.state.contactMain.contactName }}
  <!-- {{ $store.state.mainName }} -->
  <!-- {{ $store.state }} -->
</template>
<script>
export default{
  data(){
    return{
      menimTestDatam:""
    }
  },
methods:{
test(){
  this.$store.commit('setItem',this.menimTestDatam)
}
}
}
</script>