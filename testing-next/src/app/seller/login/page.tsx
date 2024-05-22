import LoginCard from "@/components/login"

export default function LoginPage(){
    return(
        <>
            <LoginCard
                back={"/seller"}
                pass={"/seller/dashboard/gift"}
                recover={"/seller/login/forgot-password"}
                registration={"/seller/registration" }
            />
        </>
    )
}
