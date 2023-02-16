<template>
  <div class="nav-section" v-if="user">
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" @click="showSideBar">
                    <span class="navbar-toggler-icon"></span>
                </button> -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="text-white-50">
                        <p class="mb-0">Hello, {{user.displayName}}</p>
                        <p class="mb-0">login with {{user.email}}</p>
                    </div>
                </div>
                <a class="navbar-brand" href="#">Chat app</a>
                <button class="btn btn-outline-secondary" @click="logout">log out</button>
            </div>
        </nav>
    </div>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';


export default {
    setup(props,context){
        let showSideBar = ()=>{
            context.emit('showChatBar');
        }
        let {logout} =  useLogout();
        let {user} = getUser();
       
        return {logout,user,showSideBar}
    }
}
</script>

<style>

</style>