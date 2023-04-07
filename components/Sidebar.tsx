import NextImage from 'next/image';
import { Box, Divider } from '@chakra-ui/react';
import SidebarList from '@/components/SidebarNavList';
import SidebarPlayList from '@/components/SidebarPlayList';
import { musicMenu, navMenu } from '@/constants/sidebar';

const Sidebar = () => {
  return (
    <Box
      width="full"
      height="calc(100vh - 6rem)"
      bg="black"
      paddingX={1}
      color="gray"
    >
      <Box paddingY={5} height="full" display="flex" flexDirection="column">
        <Box width={32} marginBottom={8} paddingX={5}>
          <NextImage src="/logo.svg" alt="trax logo" height={60} width={120} />
        </Box>
        <Box marginBottom={5}>
          <SidebarList list={navMenu} />
        </Box>
        <Box>
          <SidebarList list={musicMenu} />
        </Box>
        <Divider color="gray.600" marginY={5} />
        <Box overflowY="auto">
          <SidebarPlayList />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
