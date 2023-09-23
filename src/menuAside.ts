import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiVuejs,
  mdiAccount,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  // {
  //   href: '/dashboard/youths',
  //   label: 'Youths',
  //   icon: mdiAccount,
  // },
  {
    href: '/dashboard/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  },
]

export default menuAside
