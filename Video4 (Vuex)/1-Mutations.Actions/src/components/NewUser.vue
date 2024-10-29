<template>
<button @click="update">BUTTON</button>
</template>
<script>
export default{
    methods:{
        update(){
            const userData={id:new Date().getTime(), title:"Massa", type:""}
           this.$store.commit("newItem", userData)
           this.$store.dispatch("newItem", userData)
            // this.$store.state.things.push({id:new Date().getTime(), title:"Masa", type:"" })
            // this.$store.state.fullName=new Date().getTime()
        }
    }
}
</script>