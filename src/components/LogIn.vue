<template>
  <div class="login text-center">
    <h1>Login</h1>
    <form class="w-50 d-inline-block my-3" @submit.prevent="login">
      <input type="email" placeholder="email" class="form-control my-1" v-model="email">
      <input type="password" placeholder="password" class="form-control my-1" v-model="password">
      <div v-if="error" class="my-2">
        <span class="text-danger ">{{ error }}</span>
      </div>
      <button class="btn outline-color">Login</button>
    </form>
    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useLogin from '@/composables/useLogin';
export default {
setup(props,context){
  let email = ref('');
  let password = ref('');
  let {error,loginAccount} = useLogin();

  let login = async()=>{
   let res =  await loginAccount(email.value,password.value);
   if (res) {
    context.emit("enterChatroom")
   }
  }
  
  return{email,password,login,error}
}
}
</script>

<style>

</style>