import React from 'react'

import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" mt={2}>About Me</Typography>
      <img
        src="https://picsum.photos/300"
        alt="Dummy"
        style={{ width: '200px', borderRadius: '50%' }}
      />
      
      <Typography variant="body1" mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo sed sapien
        ullamcorper tincidunt. Etiam convallis vestibulum ex, sit amet ullamcorper metus
        consectetur eu. Duis vestibulum urna at mauris luctus, vel bibendum lorem efficitur.
      </Typography>
    </Box>
  );
};

export default About;




