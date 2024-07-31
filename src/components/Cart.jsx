import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Image } from '@mui/icons-material';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345  }}>
              <Typography gutterBottom variant="h5" component="div">
              Motomel Skua 125
        </Typography>
      <CardMedia
        sx={{ height: 300 }}
        image="https://www.aszisa.com.ar/359-large_default/moto-motomel-skua-125.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        $ 1.999.900
        </Typography>
        <Typography variant="body2" color="text.secondary">
        La línea skua se renueva con la incorporación de la nueva Skua 
        125 xtreme, equipada para los terrenos más difíciles, con componentes 
        ideales para los usuarios más aventureros, que buscan una moto on/off 
        de calidad y accesible.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
    
    
  );
}