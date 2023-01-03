<template>
  <div class="login text-center">
    <h1>Sign Up</h1>
    <form class="w-50 d-inline-block my-3" @submit.prevent="signUp">
      <input type="text" placeholder="name" class="form-control my-1" v-model="userName">
      <input type="email" placeholder="email" class="form-control my-1" v-model="email">
      <input type="password" placeholder="password" class="form-control my-1" v-model="password">
      <button class="btn btn-outline-secondary">Sign Up</button>
  </form>
  
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import {auth} from '../firebase/config';

export default {
  setup(){
    let userName = ref('');
    let email = ref('');
    let password = ref();
    let signUp= async()=>{
      let res = await auth.createUserWithEmailAndPassword(email.value,userName.value,password.value)
      console.log(res.user);
    }
    return{userName,email,password,signUp}
  }
}
</script>

<style>

</style>
