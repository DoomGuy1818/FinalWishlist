import RegistrationCard from "@/components/register"

export default function createWishlistPage() {
  return(
    <>
      <RegistrationCard 
        back={ "/login" }
        login={ "/login" }
      />
    </>
  )
}
