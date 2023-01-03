<template>
  <div class="container">
    <div class="row">
        <div class="col-12">
            <div class="welcome my-5 shadow-sm p-5 rounded-5">
                <div v-if="showLoginForm">
                  <LogIn/>
                    <p class="text-center text-secondary">Create Account! <span class="text-decoration-underline text-success" role="button" @click="showLoginForm=!showLoginForm">Sign Up</span></p>
                </div>
                <div v-else >
                  <SignUp/>
                  
                  <p class="text-center text-secondary">Already have an account! <span class="text-decoration-underline text-success" role="button" @click="showLoginForm=!showLoginForm">Login</span></p>
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
export default {
  components: {
    LogIn, SignUp },
    setup(){
      let showLoginForm = ref(true);


      return{showLoginForm}
    }

}
</script>

<style>

</style>