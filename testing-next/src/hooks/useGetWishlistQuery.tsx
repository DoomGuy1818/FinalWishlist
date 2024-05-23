'use client'
import { useQuery } from '@tanstack/react-query';
import { fetchWishlists } from '@/services/fetch';
import { Wishlist } from "@/types/wishlist"

const UseGetWishlistQuery = () => {

    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchWishlists,
        queryKey: ['wishlist'],
        staleTime: 1000 * 5,
    });
};
export { UseGetWishlistQuery };
