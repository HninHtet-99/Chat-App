<template>
  <div class="sign-up text-center">
    <h1>Login</h1>
    <form class="w-50 d-inline-block my-3" @submit.prevent="logIn">
      <input type="email" placeholder="email" class="form-control my-1" v-model="email">
      <input type="password" placeholder="password" class="form-control my-1" v-model="password">
      <button class="btn btn-outline-secondary">Login</button>
    </form>
    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
setup(){
  let email = ref();
  let password = ref();
  let logIn=()=>{
    console.log(email.value,password.value);
  }
  
  return{email,password,logIn}
}
}
</script>

<style>

</style>