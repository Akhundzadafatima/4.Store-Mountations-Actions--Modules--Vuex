<template>
<NewUser/>
<UserList/>
</template>

<script>
import NewUser from './components/NewUser.vue';
import UserList from './components/UserList.vue';


export default{
components:{
  NewUser,
  UserList
}
}
</script>