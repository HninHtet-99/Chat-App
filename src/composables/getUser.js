import { auth } from '@/firebase/config';
import { ref } from '@vue/reactivity';

let user = ref(auth.currentUser)
let getUser = ()=>{
    auth.onAuthStateChanged((_user)=>{
        user.value = _user;
    })
    return {user}
}

export default getUser;