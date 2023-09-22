import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";

function UserPage() {
  const router = useRouter();
  const { userEmail } = router.query;
  const token =Cookies.get('jwtToken')
  const finalUserEmail=userEmail?.toString().split(',')[1]

  useEffect(()=>{
    if(finalUserEmail){
      const updateScanStatus=async ()=>{
        try{
         const headers={
           "Authorization":`Bearer ${token}`
         }
         console.log(finalUserEmail)
         const response =await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin-scan/${finalUserEmail}`,{headers})
         console.log(response)
         toast.success(`Scanned in!!! ${finalUserEmail}`,{theme:'dark'})
        
        }
        catch(e:any){
         console.log(e.response.data.error)
         toast.error(`${e.response.data.error} for user: ${finalUserEmail}`,{theme:'dark'})
        }
       }
       updateScanStatus()
    }
    
    
  })
  return (
    <div>
      <ToastContainer/>
      <h1>User Email: {finalUserEmail}</h1>
     
    </div>
  );
}

export default UserPage;
