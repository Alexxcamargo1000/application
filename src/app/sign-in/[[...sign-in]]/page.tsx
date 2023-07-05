import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-zinc-950 h-screen w-screen flex justify-center items-center">
      <SignIn  />
    </div>
  )
}