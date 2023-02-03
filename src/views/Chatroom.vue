<template>
  <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="container vh-100 shadow">
                    <div class="row">
                        <div class="col-12 p-0">
                            <!-- nav -->
                            <Navbar/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4 border-end border-3">
                            <div class="chat-section">
                                <div class="chat border-bottom">
                                    <div class="chat-body">
                                        <div class="chat-img">
                                            <img src="" alt="">
                                        </div>
                                        <div class="chat-text-section">
                                            <div class="chat-name">
                                                <span>Hnin Htet Aung</span>
                                            </div>
                                            <div class="chat-paragraph">
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat border-bottom">
                                    <div class="chat-body">
                                        <div class="chat-img">
                                            <img src="" alt="">
                                        </div>
                                        <div class="chat-text-section">
                                            <div class="chat-name">
                                                <span>Hnin Htet Aung</span>
                                            </div>
                                            <div class="chat-paragraph">
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-8">
                            <ChatForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
import ChatForm from '../components/ChatForm'
import getUser from '@/composables/getUser'
import Navbar from '../components/Navbar'
import { useRouter } from 'vue-router';
import { watch } from '@vue/runtime-core';
export default {
  components: {
    ChatForm, Navbar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user,()=>{
        if (!user.value) {
            router.push('/')
        }
    })
  }

}
</script>

<style>
.navbar{
    background-color: #0e153a;
}
.navbar-brand{
    color: aliceblue !important;
}
.chat-body{
    display: flex;
    justify-content: center;
    align-items: center;
}
.chat-img{
    display: contents;
}
.chat-img img{
    width: 10%;
    height: 10%;
    border-radius: 50%;
}
.chat-text-section{
    margin-left: 10px;
}
.chat-name span{
    font-size: 25px;
    font-weight: 500;
    color: #0e153a;
}

@media screen and (max-width:420px) {
    .chat-section{
        display: none;
    }
}
</style>