<template>
  <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="container shadow">
                    <div class="row">
                        <div class="col-12 p-0">
                            <!-- nav -->
                            <Navbar @showChatBar="showChatBar"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 border-end border-3 chatBar" ref="chatBar" v-if="chatBar" style="width: 85%;">                            
                            <div class="chat-section">
                            <div class="chat-head border-bottom">
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
                            <div class="chat-head border-bottom">
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
                        <div class="col-8" style="background-color: #fafafa; width: 100%;">
                            <SingleChat/>
                            <ChatForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
import SingleChat from '../components/SingleChat'
import ChatForm from '../components/ChatForm'
import getUser from '@/composables/getUser'
import Navbar from '../components/Navbar'
import { useRouter } from 'vue-router';
import { ref, watch } from '@vue/runtime-core';
export default {
  components: {
    SingleChat,
    ChatForm, Navbar },
  setup(){
    let chatBar = ref(true);
    let {user} = getUser();
    let router = useRouter();
    watch(user,()=>{
        if (!user.value) {
            router.push('/')
        }
    })
    let showChatBar = ()=>{
        chatBar.value = !chatBar.value;
        console.log(chatBar.value);
    }
    return{showChatBar,chatBar}
  }

}
</script>

<style>
.navbar{
    background-color: #0e153a;
}
.navbar-brand{
    color: #f0f8ff !important;
}
.chat-body{
    display: flex;
    justify-content: center;
    align-items: center;
}
.chat-section{
    position: absolute;
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
        height: 88vh;
        left: 15px;
        width: 85%;
        position: absolute;
        z-index: 1;
        background-color: #6e76a0;
        animation: showChat 1s;
    }
    @keyframes showChat {
        from{
            transform: translateX(-1px);
        }
        to{
            transform: translateX(0px);
        }
    }
}
</style>