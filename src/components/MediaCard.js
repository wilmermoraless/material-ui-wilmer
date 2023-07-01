import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 550 }}>
      <CardMedia
        sx={{ height: 300, }}
        image="https://th.bing.com/th/id/OIP.H5f8Beg-KQzSxsOfWHLcOwHaHa?w=181&h=180&c=7&r=0&o=5&pid=1.7"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velociraptor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          El velociraptor era un depredador muy inteligente que se movia en manadas y que empleaba estrategias para acorralar y cazar a sus presas. El velociraptor fue un carnivoro con plumas de dos metros de longitud que media tan solo 70 centimetros, un tamaño pequeño para ser un dinosaurio
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Aprender Mas</Button>
      </CardActions>
    </Card>
  );
}