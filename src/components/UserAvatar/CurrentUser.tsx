import React, { ReactNode } from 'react'
import { useAppSelector } from '../../stores/hooks'
import UserAvatar from '.'
import { RootState } from '@/stores/store'

type Props = {
  className?: string
  children?: ReactNode
}

export default function UserAvatarCurrentUser({ className = '', children }: Props) {
  const userName = useAppSelector((state: RootState) => state.main.firstName)
  const userAvatar =
    'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93'

  return (
    <UserAvatar username={userName} avatar={userAvatar} className={className}>
      {children}
    </UserAvatar>
  )
}
