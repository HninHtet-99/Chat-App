import { auth } from "@/firebase/config";


let logout = async()=>{
    try {
        await auth.signOut();
    } catch (err) {
        console.log(err.message);
    }
}
let useLogout = ()=>{
    return {logout}
}


export default useLogout;