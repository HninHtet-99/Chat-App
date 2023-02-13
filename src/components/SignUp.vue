<template>
  <div class="sign-up text-center">
    <h1>Sign Up</h1>
    <form class="w-50 d-inline-block my-3" @submit.prevent="signUp">
      <input type="text" placeholder="name" class="form-control my-1" v-model="userName">
      <input type="email" placeholder="email" class="form-control my-1" v-model="email">
      <input type="password" placeholder="password" class="form-control my-1" v-model="password">
      <input type="file" id="img" name="img" accept="image/*" class="form-control my-1" ref="image" @change="imgUpload">
      <div v-if="error" class="mt-2">
        <span class="text-danger ">{{ error }}</span>
      </div>
      <button class="btn btn-outline-secondary">Sign Up</button>
      </form>
  
  
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignUp from '@/composables/useSignUp';
import { computed } from '@vue/runtime-core';

export default {
  setup(props,context){
    let userName = ref('');
    let email = ref('');
    let password = ref('');
    let image = ref();
    let url = ref() ;
    let{error,createAccount} = useSignUp();

    let imgUpload = computed(()=>{
      const reader = new FileReader();
      const file = image.value.files[0];
      url.value = reader.readAsDataURL(file);
      // if (file) {
      //   reader.addEventListener("load", () => {
      
      //   url.value = reader.result;
      //   }, false);
        console.log(reader.result);
        
      // } 
      // return reader.readAsDataURL(file);
    })

    let signUp= async()=>{
      let res =  await createAccount(email.value,userName.value,password.value,url.value);
      if (res) {
        context.emit("enterChatroom")
        
      }
    }
    return{userName,email,password,image,imgUpload,signUp,error}
  }
}
</script>

<style>

</style>
