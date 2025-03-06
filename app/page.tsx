'use client';
import { useSession } from "next-auth/react";

const App = () => {

  const { data: session } = useSession();
  let token = ''; 
  if (session) {
    token = session.accessToken;
  }

  return (
    <>
      <h1 className="mt-10 text-center text-[10vw] md:text-[5vw] font-thin">Welcome!</h1>
      <p>{token}</p>
    </>
  );
}

export default App;