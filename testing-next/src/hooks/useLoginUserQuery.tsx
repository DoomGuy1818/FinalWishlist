import {useMutation} from "@tanstack/react-query";
import { User } from "@/types/user"
import {LoginUser} from "@/services/fetch";

const UseLoginUser = () => {
    return useMutation({
            mutationFn: LoginUser,
        }
    );
}

export { UseLoginUser };