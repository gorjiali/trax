import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md';
import { SidebarNavListItemType } from '@/types/sidebar';

export const navMenu: SidebarNavListItemType[] = [
  {
    label: 'Home',
    icon: MdHome,
    path: '/',
  },
  {
    label: 'Search',
    icon: MdSearch,
    path: '/search',
  },
  {
    label: 'Your Library',
    icon: MdLibraryMusic,
    path: '/library',
  },
];

export const musicMenu: SidebarNavListItemType[] = [
  {
    label: 'Create Playlist',
    icon: MdPlaylistAdd,
    path: '/',
  },
  {
    label: 'Favorites',
    icon: MdFavorite,
    path: '/favorites',
  },
];
