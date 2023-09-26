import { mdiMonitor, mdiCog } from '@mdi/js'
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
    href: '/dashboard/settings',
    label: 'Settings',
    icon: mdiCog,
  },
]

export default menuAside
