import {Container, Typography} from '@mui/material';
import React from 'react';

interface SectionProps {
  title: string;
  children?: JSX.Element;
}

const Section: React.FC<SectionProps> = ({title, children}) => {
  return (
    <Container component="section" maxWidth="xl" sx={{padding: '25px'}}>
      <Typography variant="h4" sx={{marginBottom: '20px'}}>
        {title}
      </Typography>
      {children}
    </Container>
  );
};

export default Section;
