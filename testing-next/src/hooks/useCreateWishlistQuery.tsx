import { useMutation } from "@tanstack/react-query";
import { CreateWishlist} from "@/services/fetch";

export const UseCreateWishlistQuery = () => {
    return useMutation({
        mutationFn: CreateWishlist
    });

}
