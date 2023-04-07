import NextLink from 'next/link';
import { LinkBox, LinkOverlay, ListIcon, ListItem } from '@chakra-ui/react';
import { SidebarNavListItemType } from '@/types/sidebar';

interface SidebarNavListItemProps {
  item: SidebarNavListItemType;
}

export default function SidebarNavListItem({ item }: SidebarNavListItemProps) {
  return (
    <ListItem paddingX={5}>
      <LinkBox>
        <LinkOverlay as={NextLink} href={item.path}>
          <ListIcon as={item.icon} color="white" marginRight={5} />
          {item.label}
        </LinkOverlay>
      </LinkBox>
    </ListItem>
  );
}
