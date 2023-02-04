import axios from "axios";


const api = axios.create({
    baseURL: 'https://cinemaauthentication.onrender.com/api'
})

const register = async (user)=>{
   return api.post('/register',user)
}

const login =  (user)=>{
    return api.post('/login',user)
    .then((response)=>{
        if(response && response.data){
             localStorage.setItem('user',JSON.stringify(response.data))
        }
        return response.data
    })
}


const logout = ()=>{
    localStorage.removeItem('user')
}

const authService = {register,login,logout}

export default authService