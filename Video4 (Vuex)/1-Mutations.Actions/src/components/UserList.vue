<template>
   <ul>
  <li v-for="(item, index) in elektronlar" :key="index">{{ item.title }}</li>
 </ul>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters({
            elektronlar:"elektronlar",
        })
    }
}
</script>