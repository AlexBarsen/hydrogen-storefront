import React from 'react';
import {Box, Card, CardHeader, CardMedia} from '@mui/material';

const PageHeader = ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string | undefined;
}) => {
  return (
    <Box>
      <Card sx={{width: '100%', height: 250}}>
        <CardHeader />
        <CardMedia
          sx={{objectFit: 'contain', height: 200}}
          component="img"
          width="100%"
          image={imageUrl}
          alt={title + 'Collection'}
        />
      </Card>
    </Box>
  );
};

export default PageHeader;
