import type {Collection} from '@shopify/hydrogen/storefront-api-types';
import Section from './Section';
import {Grid, Paper, CardMedia, Card, Typography} from '@mui/material';
import {Link} from '@remix-run/react';

const FeaturedCollections = ({
  collections,
  title = 'Collections',
  ...props
}: {
  collections: Collection[];
  title?: string;
  [key: string]: any;
}) => {
  console.log(collections);
  const haveCollections = collections && collections.length > 0;
  if (!haveCollections) return null;

  const items = collections.filter((item) => item.image).length;

  return (
    <Section title="Collections" {...props}>
      <Grid container columns={5} spacing={3} gridAutoRows="1fr">
        {collections.map((collection) => {
          if (!collection?.image) {
            return null;
          }
          return (
            <Grid item xs={1} key={collection.id}>
              <Link to={`/collections/${collection.handle}`}>
                <Paper elevation={3}>
                  {collection?.image && (
                    <Card
                      sx={{
                        maxWidth: 345,
                        height: 250,
                        display: 'flex',
                        justifyItems: 'center',
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="100"
                        image={collection.image.url}
                        alt={`Image of ${collection.title}`}
                        sx={{objectFit: 'contain', padding: '45px'}}
                      />
                    </Card>
                  )}
                  <Typography>{collection.title} </Typography>
                </Paper>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

export default FeaturedCollections;
