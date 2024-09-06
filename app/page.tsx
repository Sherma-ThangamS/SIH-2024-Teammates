'use client'
import LoginPage from "@/components/login/LoginPage";
import RegisterPage from "@/components/register/RegisterPage";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  type SessionType = Session & {
        user: {
          name: string | null;
          email: string | null;
        };
      };
    
  // Ensure session is typed correctly
  const typedSession = session as SessionType;

  if (!typedSession) {
    return (
      <main className="h-screen w-screen bg-blue-400">
        <header className="h-[10vh] bg-blue-950 flex items-center justify-center">  
          <div className="bg-white w-[90%] md:w-[60%] lg:w-[30%] rounded-sm flex justify-between h-[50%]">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 m-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input type="text" placeholder="Search Location" className="ml-2 left-0 w-full"/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 right-0 m-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
        </header>
        {/* Adjusted the circle to be responsive and visible */}
        <div className="bg-blue-950 rounded-full flex items-center justify-end text-center text-2xl md:text-3xl lg:text-4xl absolute text-white 
  w-[40vw] h-[40vw] left-[-1%] top-[2%] transform translate-x-[-50%] translate-y-[-50%] max-w-[75vh] max-h-[75vh]">

          <div className="mt-[30vh] mr-[3vw]">
            <span className="text-blue-700">S</span>
            hinza {" "}
            <span className="text-blue-700">J</span>
            inzai
          </div>
        </div>
        <div className="flex flex-col gap-[4vw] md:flex-row items-center justify-end  mt-6 md:mt-[5vh] text-2xl text-white mr-[3vw]">
          <div className="">
            <h1>Map</h1>
          </div>
          <div>
            <h1>Features</h1>
          </div>
          <div>
            <h1>Demo</h1>
          </div>
          <div>
            <h1>About Us</h1>
          </div>
          <div className="bg-blue-800 rounded-lg border border-white px-3 py-1">
            <h1>Get Started</h1>
          </div>
        </div>
        <div className="text-white text-center text-4xl mt-[6vh] font-semibold">
          <h1>Welcome To Shinza Jenkai!</h1>
        </div>
      </main>
    );
  } else {
    router.push('/login');
  }
  
  // return (
  //   <div>
  //     <LoginPage/>
  //   </div>
  // );
}
