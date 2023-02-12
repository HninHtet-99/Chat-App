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
export default {
  setup(props,context){
    let userName = ref('');
    let email = ref('');
    let password = ref('');
    let image = ref(null);
    let url = ref(null);
    let{error,createAccount} = useSignUp();

    let imgUpload = (e)=>{

      // url.value = URL.createObjectURL(image.value.files[0]);
      // console.log(e.target.files[0]);
      let fileReader = new FileReader();
      console.log(fileReader);
      // fileReader.addEventListener('load',()=>{
      //   console.log(fileReader.result);
      // })
      // console.log(fileReader.readAsDataURL(e.target.files[0]));
    }

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
