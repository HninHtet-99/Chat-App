import { ref } from "vue";
import {auth} from '../firebase/config';

let error = ref(null);
let createAccount =async(email,userName,password,image)=>{
    try {
        let res = await auth.createUserWithEmailAndPassword(email,password)
        if (!res) {
          throw new Error('Could not create new account! Try Again!');
        }
        res.user.updateProfile({displayName:userName,photoURL:image});
        console.log(res);
        return res;
        
      } catch (err) {
        error.value = err.message;
      }
      
}

let useSignUp=()=>{
return {error,createAccount}
}
export default useSignUp;