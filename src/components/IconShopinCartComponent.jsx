import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="primary" aria-label="ShoppingCartIcon">
        
          <Badge color="secondary"badgeContent={1}>
            <ShoppingCartIcon />
          </Badge>

      </Fab>
    </Box>
  );
}