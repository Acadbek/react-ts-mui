import { SvgColor } from '@/components/svg-color';

const icon = (name: string) => (
  <SvgColor className='group-hover:fill-black' src={`src/assets/icons/${name}.svg`} sx={{ "&:hover": { color: 'red' }, width: 1, height: 1 }} />
)

const navConfig = [
  {
    space: 'top',
    title: 'dashboard',
    path: '',
    icon: icon('layout-grid'),
  },
  {
    space: 'top',
    title: 'my tasks',
    path: 'tasks',
    icon: icon('my-tasks'),
  },
  {
    space: 'top',
    title: 'product',
    path: 'products',
    icon: icon('briefcase'),
  },
  {
    space: 'top',
    title: 'goals',
    path: 'trophy',
    icon: icon('trophy'),
  },
  {
    space: 'middle',
    title: 'Website Design',
    path: 'website-design',
    icon: icon('circle-blue'),
  },
  {
    space: 'middle',
    title: 'SEO Analythics',
    path: 'seo-analythics',
    icon: icon('circle-yellow'),
  },
  {
    space: 'middle',
    title: 'Hiphonic App',
    path: 'hiphonic-app',
    icon: icon('circle-green'),
  },
  {
    space: 'bottom',
    title: 'Settings',
    path: '/settings',
    icon: icon('settings'),
  },
];

export default navConfig;
