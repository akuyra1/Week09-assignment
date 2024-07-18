import Image from "next/image";
import SignUpPage from "./sign-up/[[...sign-up]]/page";
import SignInPage from "./sign-in/[[...sign-in]]/page";


export default function Home() {
  return (
    <>
      <SignInPage routing="path"/>
    </>
  );
}
