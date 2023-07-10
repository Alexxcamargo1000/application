import { UserButton as User  } from "@clerk/nextjs";

interface UserProps {
  mode?: "modal" | "navigation"
}

export function UserButton({mode = "modal"}: UserProps) {
  return (
    <User userProfileMode={mode} appearance={{
      elements:{
        userButtonBox: 'flex flex-row-reverse',
        userButtonOuterIdentifier: 'text-zinc-500 text-sm lowercase',
        avatarBox: 'w-14 h-14',
        userButtonPopoverFooter: 'hidden'
      }
    }} showName  afterSignOutUrl="/"/>
  )
}