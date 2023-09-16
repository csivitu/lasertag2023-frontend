import Cookies from "js-cookie";
import jwtDecode from 'jwt-decode';

export const checkExpiry = () => {
    const token = Cookies.get('jwtToken');
    if (!token) {
        return true;
    }
    const decodedToken: any = jwtDecode(token);
    const currentTime: number = Date.now() / 1000;
    if(decodedToken.exp < currentTime){
        return true;
    }
    else{
        return false;
  }
}