import ForgotPasswordCard from "@/components/recover"

export default function CustomerRecover() {
  return(
    <>
      <ForgotPasswordCard
        back={ "/login" }    
        login={ "/login" }    
        registration={ "/register" }    
      />
    </>
  );
}
