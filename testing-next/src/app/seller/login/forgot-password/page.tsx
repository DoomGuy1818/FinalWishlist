import ForgotPasswordCard from "@/components/recover"

export default function forgotPassword(){
    return(
        <div>
            <ForgotPasswordCard
                back={ "/seller/login" }
                login={ "/seller/login" }
                registration={"/seller/registration"}
            />
        </div>
    )
}

