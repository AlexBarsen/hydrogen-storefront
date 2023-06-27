import type {MediaEdge} from '@shopify/hydrogen/storefront-api-types';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Paper, PaperProps} from '@mui/material';
import ImageModal from './ImageModal';
import {useState} from 'react';

const PaperComponent = <C extends React.ElementType>(props: PaperProps<C>) => {
  return (
    <Paper elevation={8} sx={{height: '300px', width: '320px'}} square>
      {props.children}
    </Paper>
  );
};

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
const ProductGallery = ({media}: {media: MediaEdge['node'][]}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const rows = Math.round(media.length / 2);
  const [activeIndex, setActiveIndex] = useState(0);
  const images = media.map((item) => item.image.url);

  const handleOpen = (index: any) => {
    setOpen(true);
    setActiveIndex(index);
  };

  if (!media.length) {
    return null;
  }

  return (
    <div style={{position: 'relative'}}>
      <ImageModal
        handleClose={handleClose}
        open={open}
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <ImageList
        sx={{width: 730, height: rows * 340, padding: '20px'}}
        variant="quilted"
        cols={2}
        rowHeight={200}
      >
        {media.map((item, index) => {
          if ('image' in item)
            return (
              <ImageListItem key={item.id} component={PaperComponent}>
                <img
                  src={item.image?.url}
                  alt={'asd'}
                  loading="lazy"
                  style={{
                    objectFit: 'contain',
                    height: '100%',
                    width: '100%,',
                  }}
                  onClick={() => handleOpen(index)}
                />
              </ImageListItem>
            );
        })}
      </ImageList>
    </div>
  );
};

export default ProductGallery;
