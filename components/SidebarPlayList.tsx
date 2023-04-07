import NextLink from 'next/link';
import { LinkBox, LinkOverlay, List, ListItem } from '@chakra-ui/react';

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

export default function SidebarPlayList() {
  return (
    <List spacing={2}>
      {playlists.map((playlist) => (
        <ListItem paddingX={5} key={playlist}>
          <LinkBox>
            <LinkOverlay as={NextLink} href="/about">
              {playlist}
            </LinkOverlay>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  );
}
