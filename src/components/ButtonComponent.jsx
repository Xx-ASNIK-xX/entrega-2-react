import { Stack, Button } from '@mui/material';
import './ButtonComponent.css';

export default function ButtonComponent({ nombre, callback }) {
    return (
      <>
    <Stack spacing={2} direction="row">
      <Button  variant="contained" onClick={callback}>{nombre}</Button>
    </Stack>
      </>
    );
  }
  