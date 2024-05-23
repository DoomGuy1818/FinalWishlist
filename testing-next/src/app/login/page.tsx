import Login from "@/components/login"

export default function CustomerLogin() {
  return(
    <>
      <Login pass={"/profile"} registration={"/register"} recover={'/recover'}/>
    </>
  );
}
