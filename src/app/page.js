import Image from "next/image";
import SignUpPage from "./pages/sign-up/[[...sign-up]]/page";
import SignInPage from "./pages/sign-in/[[...sign-in]]/page";
import homeStyles from '@/app/StylesFolder/HomeStyles.module.css'
import panda from '@/images/red-panda.png'
export default function Home() {
  return (
    <>
      {/* <h1 className={homeStyles.homeBody}> Snitch</h1>
      <p className={homeStyles.bodyText}>Welcome to Snitch, your social hub for connecting, sharing, and discovering! Start exploring and stay connected with friends and the latest updates.</p> */}
      <div className={homeStyles.bodyContainer}>
        <div className={homeStyles.innerBodyContainerOne}>
          <h1 className={homeStyles.welcomeMessage}>Welcome to your profile Rambo</h1>
          <Image 
            src={panda}
            alt="user profile thumbnail"
            width={250}
            height={250}
            className={homeStyles.profilePic}
          />
        </div>
        <div className={homeStyles.innerBodyContainerTwo}>
          <div className={homeStyles.userFeedContainerOne}>
            <form className={homeStyles.userFeedForm}>
              <input type="text" placeholder="What's on your mind?"></input>
              <button>Post</button>
            </form>
            <div className={homeStyles.userFeedContainerTwo}>
              <h1>This here, is where your snitches are posted</h1>
              <div className={homeStyles.userFeedContainerThree}>
                <div className={homeStyles.posts}>Post 1 </div>
                <div className={homeStyles.posts}>Post 2 </div>
                <div className={homeStyles.posts}>Post 3 </div>
              </div>
            </div>
          </div>
          <div className="user-feed-container-4"></div>
        </div>

      </div>
    </>
  );
}
