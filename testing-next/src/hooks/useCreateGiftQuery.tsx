import {useMutation}  from "@tanstack/react-query";
import {CreateGift} from "@/services/fetch";

export const UseCreateGiftQuery =  () => {
    return useMutation({
        mutationFn: CreateGift
    });

}