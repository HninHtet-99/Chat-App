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
                        <div class="col-4 border-end border-3 chat-bar" ref="chatBar" v-if="chatBar">                            
                            <div class="chat-section">
                                <button class="btn btn-outline-light close-btn d-block d-md-none" @click="chatBar=!chatBar">close</button>
                                <div class="mt-5 mt-md-2">
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
                        </div>
                        <div class="col-8 single-chat-section" style="background-color: #fafafa;">
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
    .nav-section{
        position: absolute;
        width: 93%;
        z-index: 1;
    }
    .close-btn{
        position: absolute;
        right: 0;
    }
    .chat-bar{
        width: 85%;
    }
    .single-chat-section{
        width: 100%;
    }
    .chat-section{
        height: 99vh;
        left: 15px;
        width: 85%;
        position: absolute;
        z-index: 1;
        background-color: #b2b8d3;
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