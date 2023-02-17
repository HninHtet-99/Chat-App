<template>
  <div class="sign-up text-center">
    <h1>Sign Up</h1>
    <form class="w-50 d-inline-block my-3" @submit.prevent="signUp">
      <input type="text" placeholder="name" class="form-control my-1" v-model="userName">
      <input type="email" placeholder="email" class="form-control my-1" v-model="email">
      <input type="password" placeholder="password" class="form-control my-1" v-model="password">
      <div v-if="error" class="mt-2">
        <span class="text-danger ">{{ error }}</span>
      </div>
      <button class="btn outline-color">Sign Up</button>
      </form>
  
  
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignUp from '@/composables/useSignUp';


export default {
  setup(props,context){
    let userName = ref('');
    let email = ref('');
    let password = ref('');
    let{error,createAccount} = useSignUp();

    let signUp= async()=>{
      let res =  await createAccount(email.value,userName.value,password.value);
      if (res) {
        context.emit("enterChatroom")
        
      }
    }
    return{userName,email,password,signUp,error}
  }
}
</script>

<style>

</style>
