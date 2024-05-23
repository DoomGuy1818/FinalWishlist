import {useMutation} from "@tanstack/react-query";
import { User } from "@/types/user"
import {CreateWishlist} from "@/services/fetch";

const UseRegisterUser = () => {
   return useMutation({
      mutationFn: CreateWishlist,
       }
   );
}

export { UseRegisterUser };