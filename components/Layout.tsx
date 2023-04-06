import * as React from 'react';
import { Box } from '@chakra-ui/layout';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box width="100vw" height="100vh">
      <Box position="fixed" top="0" width={56} left="0">
        sidebar
      </Box>
      <Box marginLeft={56} marginBottom={24}>
        {children}
      </Box>
      <Box position="fixed" left="0" bottom="0">
        player
      </Box>
    </Box>
  );
}
