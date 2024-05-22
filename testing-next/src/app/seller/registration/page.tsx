import RegistrationCard from "@/components/register"

export default function SellerRegistration(){
    return(
        <div>
            <RegistrationCard
                back={"/seller/login"}
                login={"/seller/login"}
            />
        </div>
    )
}
