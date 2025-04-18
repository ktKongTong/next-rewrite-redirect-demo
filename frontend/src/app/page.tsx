'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Home() {

  const router = useRouter();
  const handleAuth = () => {
    router.push('/redirect')
  }

  return (
    <button onClick={() => {handleAuth()}} className={'bg-lime-200 rounded-lg p-3 hover:bg-lime-100 cursor-pointer'}>
      click to redirect
    </button>
  );
}
