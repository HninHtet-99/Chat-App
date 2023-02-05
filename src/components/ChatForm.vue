<template>
    <div class="chat-room-section">
        <form>
            <span v-if="error" class="text-danger">{{ error }}</span>
            <textarea placeholder="Type here and hit enter to send !" v-model="message" @keypress.enter="sendMessage"></textarea>
        </form>
        
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { timestamp } from '@/firebase/config';
import getUser from '@/composables/getUser';
import addCollection from '@/composables/addCollection';
export default {
setup(){
    let message = ref('');
    let {user} = getUser();
    let {error,addDoc} = addCollection('messages');
    let sendMessage = async()=>{
        let chat = {
            message: message.value,
            sender_name: user.value.displayName,
            created_at: timestamp()
        }
        await addDoc(chat);
        message.value='';
    }

    return{message,sendMessage,error}
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