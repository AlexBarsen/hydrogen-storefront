import * as React from 'react';
import Modal from '@mui/material/Modal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {makeStyles} from '@mui/styles';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  carouselContainer: {
    width: '700px',
    position: 'relative',
    borderRadius: '15px',
  },
  carouselImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
  },
  prevButton: {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
  },
  nextButton: {
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
  },
}));

const ImageModal = ({
  handleClose,
  open,
  images,
  activeIndex,
  setActiveIndex,
}: {
  handleClose: () => void;
  open: boolean;
  images: string[];
  activeIndex: number;
  setActiveIndex: any;
}) => {
  const classes = useStyles();

  const handlePrevious = () => {
    setActiveIndex((activeIndex: any) =>
      activeIndex === 0 ? images.length - 1 : activeIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((activeIndex: any) =>
      activeIndex === images.length - 1 ? 0 : activeIndex + 1,
    );
  };

  return (
    <Modal open={open} onClose={handleClose} className={classes.modalContainer}>
      <div className={classes.carouselContainer}>
        <img src={images[activeIndex]} className={classes.carouselImage} />
        <ArrowBackIcon
          onClick={handlePrevious}
          className={classes.prevButton}
          fontSize="large"
        >
          Previous
        </ArrowBackIcon>
        <ArrowForwardIcon
          onClick={handleNext}
          className={classes.nextButton}
          fontSize="large"
        >
          Next
        </ArrowForwardIcon>
      </div>
    </Modal>
  );
};
export default ImageModal;
