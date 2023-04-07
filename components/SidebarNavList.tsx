import { List } from '@chakra-ui/react';
import SidebarListItem from '@/components/SidebarNavListItem';
import { SidebarNavListItemType } from '@/types/sidebar';

interface SidebarNavListProps {
  list: SidebarNavListItemType[];
}

export default function SidebarNavList({ list }: SidebarNavListProps) {
  return (
    <List spacing={2}>
      {list.map((listItem) => (
        <SidebarListItem key={listItem.label} item={listItem} />
      ))}
    </List>
  );
}
