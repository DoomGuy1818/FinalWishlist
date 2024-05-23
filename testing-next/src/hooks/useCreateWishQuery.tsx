import {useMutation} from "@tanstack/react-query";
import {CreateWish} from "@/services/fetch";

export const UseCreateWishQuery =  () => {
     return useMutation({
        mutationFn: CreateWish
    });

}