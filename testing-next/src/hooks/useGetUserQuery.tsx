'use client'
import { useQuery } from '@tanstack/react-query';
import { fetchUser, fetchWishlists } from '@/services/fetch';
import { User } from "@/types/user"

const UseGetUserQuery = () => {

    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchUser,
        queryKey: ['user'],
        staleTime: 1000 * 5,
    });
};
export { UseGetUserQuery };
