import { useMutation } from "@tanstack/react-query";
import { uploadPhoto } from "@/services/fetch";

export const UseUploadPhoto = () => {
    return useMutation({
        mutationFn: uploadPhoto
    });
}