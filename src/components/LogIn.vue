<template>
  <div class="login text-center">
    <h1>Login</h1>
    <form class="w-50 d-inline-block my-3" @submit.prevent="login">
      <input type="email" placeholder="email" class="form-control my-1" v-model="email">
      <input type="password" placeholder="password" class="form-control my-1" v-model="password">
      <button class="btn btn-outline-secondary">Login</button>
    </form>
    
  </div>
</template>

<script>
import { auth } from '../firebase/config';
import { ref } from '@vue/reactivity';

export default {
setup(){
  let email = ref('');
  let password = ref('');

  let login = async()=>{
   let res = await auth.signInWithEmailAndPassword(email.value,password.value);
   console.log(res.user);
  }
  
  return{email,password,login}
}
}
</script>

<style>

</style>