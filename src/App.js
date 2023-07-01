import {Container}  from '@mui/material';
import MediaCard from './components/MediaCard';
import ButtonAppBar from './components/ButtonAppBar';
import BasicPagination from './components/BasicPagination'




export default function App() {
  return (
   
     
<Container maxWidth="sm" color="primary">
<ButtonAppBar/>

    <MediaCard/>
    
    <BasicPagination/> 
</Container>


       
  );
}


