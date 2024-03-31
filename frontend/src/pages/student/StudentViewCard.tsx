import { Box, Button, Card, Grid, Grow, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';

interface Props{
    std: object[];
    handelClick: (id: string) => void
}


function StudentViewCard({std, handelClick }: Props) {
    const [view, setView] = useState<Props[]>([])

    useEffect(() => {
        const savedView = localStorage.getItem('jobCardId');
        if(savedView) { 
            const views = JSON.parse(savedView);
            setView(views) }
       }, [])
    

  return (
    <Grow in={true} {...(true ? { timeout: 700 } : {})} style={{ transformOrigin: '0 0 0' }}>
    <Card sx={{
        alignItems: 'center',
        paddingLeft: '2rem',
        background: '#e1f1fd',
        borderRadius: '15px'
       }}>
      
        <Box p={1} width='640px'>
           <Grid container spacing={1} paddingTop='2rem'>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Student ID</Typography>
                  <Typography>{view._id}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Full Name</Typography>
                  <Typography>{view.fName}+' '+{view.lName}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                   <Typography paddingTop='1rem' >Address</Typography>
                   <Typography>{view.address}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
                    <Typography paddingTop='1rem' >BirthDay</Typography>
                   <Typography>{view.birthday}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Degree</Typography>
                  <Typography>{view.degree}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Course 1</Typography>
                  <Typography>{view.course1}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Course 2</Typography>
                  <Typography>{view.course2}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Course 3</Typography>
                  <Typography>{view.course3}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Course 4</Typography>
                  <Typography>{view.course4}</Typography>
                </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
               <Box paddingTop='20px'>
               <Button sx={{
                 bgcolor: '#09bd0c'+ ' !important', 
                 '&:hover': {
                     backgroundColor: '#4EF037',
                     opacity: [0.9, 0.8, 0.7]
                   },
                 color: 'white', width: '120px'
               }} 
               onClick={() => handelClick(view._id)} variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                </Box>
               </Grid>
           </Grid>
        </Box>
        
       </Card>
       </Grow>   
  )
}

export default StudentViewCard