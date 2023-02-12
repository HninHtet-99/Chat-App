<template>
  <div class="container">
    <div class="row">
        <div class="col-12">
            <div class="welcome my-5 shadow-sm py-5 rounded-5">
                <div v-if="showLoginForm">
                  <LogIn @enterChatroom = "enterChatroom"/>
                  <p class="text-center text-secondary">Create Account! <span class="text-decoration-underline toggle-link" @click="showLoginForm=!showLoginForm">Sign Up</span></p>
                </div>
                <div v-else >
                  <SignUp @enterChatroom = "enterChatroom"/>
                  <p class="text-center text-secondary">Already have an account! <span class="text-decoration-underline toggle-link" @click="showLoginForm=!showLoginForm">Login</span></p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { useRouter } from 'vue-router'
export default {
  components: {
    LogIn, SignUp },
    setup(){
      let showLoginForm = ref(true);
      let router = useRouter();
      let enterChatroom = ()=>{
        router.push('/chatroom');
      }

      return{showLoginForm,enterChatroom}
    }

}
</script>

<style>

</style>