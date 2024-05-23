import { useQuery } from '@tanstack/react-query';
import { getPhoto } from "@/services/fetch";

export function UseGetPhoto() {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: getPhoto,
        queryKey: ['wish'],
        staleTime: 1000 * 5,
    });
};
