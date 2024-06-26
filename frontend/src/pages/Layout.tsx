import { Box, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import backImg from '../assets/image.jpg'
import UserNavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const styles = {
    paperContainer: {
        backgroundImage: `url(${backImg})`
    }
};


function Layout() {
  // const navigate = useNavigate();
  const [user, setUser] = useState<string | undefined>('')

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     const parsedUser = JSON.parse(storedUser);
  //     setUser(parsedUser);
  //   }
  // }, [])

  const handelLogout = () => {
    // Clear user data from localStorage
    // localStorage.removeItem('user');
    
    // setUser('');
    
    // navigate(''); 
  }

  return (
    <Paper style={styles.paperContainer}>
    <Box >
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={30}>
            <UserNavBar />
        </Grid>
        <Grid item xs={6}>
          <Box >
          <Grid  
            // width='100px'
            paddingTop='1rem'
            container
            direction="row"
            alignItems="stretch"
            spacing={5}>
              <Grid item xs={3}>
                  <SideBar/>
              </Grid>
              <Grid item xs={3}>
                  <Box paddingLeft='10rem' paddingTop='1rem'>
                  <Outlet/>
                  </Box>
              </Grid>
          </Grid>
          </Box>  
        </Grid>
    </Grid>
    </Box>
    </Paper>
  )
}

export default Layout;