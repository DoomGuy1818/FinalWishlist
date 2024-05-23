'use client'
import { useQuery } from '@tanstack/react-query';
import { fetchWishes } from '@/services/fetch';

const UseGetWishesQuery = () => {

    return useQuery({
        // queryFn: () => fetchCategories(),
        queryKey: ['wishes'],
        queryFn: fetchWishes,

        staleTime: 1000 * 5,
    });
};
export { UseGetWishesQuery };
