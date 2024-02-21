import { SvgColor } from '@/components/svg-color';

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
)

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('layout-grid'),
  },
  {
    title: 'tasks',
    path: '/tasks',
    icon: icon('my-tasks'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('briefcase'),
  },
  {
    title: 'trophy',
    path: '/trophy',
    icon: icon('trophy'),
  },
  {
    title: 'settings',
    path: '/settings',
    icon: icon('settings'),
  },
  // {
  //   title: 'moon-stars',
  //   path: '/404',
  //   icon: icon('moon-stars'),
  // },
];

export default navConfig;
