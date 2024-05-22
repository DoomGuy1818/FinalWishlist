import { LoginUser } from "@/services/fetch";
import { useMutation } from "@tanstack/react-query";

const UseRegisterUser = () => {
    return useMutation({
       mutationFn: LoginUser,
        }
    );
 }
 
 export { UseRegisterUser };

