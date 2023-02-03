<template>
    <div class="chat-room-section">
        <form>
            <textarea placeholder="Type here and hit enter to send !" v-model="message" @keypress.enter="sendMessage"></textarea>
        </form>
        
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';
export default {
setup(){
    let message = ref('');
    let {user} = getUser();
    let sendMessage = ()=>{
        let chat = {
            message: message.value,
            sender_name: user.value.displayName,
            created_at: timestamp()
        }
        message.value='';
        console.log(chat);
    }

    return{message,sendMessage}
}
}
</script>

<style>
form{
    margin: 10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    border: 0;
    border-radius: 20px;
    outline: none;
    padding: 5px;
    /* position: fixed;
    bottom: 0; */
}
</style>