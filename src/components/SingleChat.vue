<template>
  <div class="chat mt-1 p-2" ref="msgBox">
    <div v-for="eachMessage in formatMessages" 
    :key="eachMessage.id" 
    class="single-chat my-1"
    :class = "(eachMessage.sender_name == currentUser ? 'sender-single-chat' : 'receiver-single-chat')" 
    
    >
        <div class="single mx-1">
            <span class="name">{{ eachMessage.sender_name }}</span>
            <span class="message">{{ eachMessage.message }}</span>
            <span class="time">{{ eachMessage.created_at}} ago</span>
        </div>
        <div class="">
            <!-- <div>{{ eachMessage.image }}</div> -->
            <img src="../assets/img/logos/bootstrap.png" class="img" alt="" >
        </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '@/firebase/config'
import { ref } from '@vue/reactivity'
import { computed, onUpdated } from '@vue/runtime-core'
import { formatDistanceToNow } from 'date-fns'
export default {
    setup(){
        let msgBox = ref(null);
        let url = ref(null);
        onUpdated(()=>{
            msgBox.value.scrollTop = msgBox.value.scrollHeight;
        })

        let currentUser = auth.currentUser.displayName;
        let allMessages = ref([]);
        let formatMessages = computed(()=>{
            return allMessages.value.map((el)=>{
                let formatTime = formatDistanceToNow(el.created_at.toDate(),{includeSeconds: true})
                url.value = el.image;
                return {...el,created_at:formatTime}
            })
        })
        db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
            let context = [];
            snap.docs.forEach((doc)=>{
                let document = {id:doc.id,...doc.data()};
                doc.data().created_at && context.push(document);
            });
            allMessages.value = context;
        })

        return{msgBox,allMessages,formatMessages,currentUser,url}
    }

}
</script>

<style>
.chat{
    height: 75vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
}
.chat::-webkit-scrollbar {
  width: 0px;
}
.single-chat{
    display: flex;
    align-items: center;
    position: relative;
    width: 336px;
}
.sender-single-chat{
    left: 50%;
}
.receiver-single-chat{
    flex-direction: row-reverse;
    left: -20px;
}
.single{
    display: inline-flex;
    flex-direction: column;
    width: 270px;
}
.sender-single-chat .single{
    align-items: flex-end;
}
.receiver-single-chat .single{
    align-items: flex-start;
}

.name, .time{
    color: #999;
    font-size: 13px;
}
.img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.message{
    border-radius: 20px;
    padding: 5px 10px;
}
.sender-single-chat .message{
    background-color: #e2f3f5;
}
.receiver-single-chat .message{
    background-color: #f0f0f0;
}
@media screen and (max-width:420px) {
    .chat{
        height: 85vh;
    }
    .sender-single-chat{
        left: 5%;
    }
    
}
</style>