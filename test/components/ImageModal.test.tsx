import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageModal from '~/components/ImageModal';

describe('ImageModal component test', () => {
  it('Should render ImageModal and handle actions', () => {
    const mockHandleClose = jest.fn();
    const mockSetActiveIndex = jest.fn();
    render(
      <ImageModal
        handleClose={mockHandleClose}
        open={true}
        images={['url_1', 'url_2']}
        activeIndex={0}
        setActiveIndex={mockSetActiveIndex}
      />,
    );
    screen.debug();
    const backButton = screen.getByTestId('ArrowBackIcon');
    fireEvent.click(backButton);
    expect(mockSetActiveIndex).toHaveBeenCalled();

    const forwardButton = screen.getByTestId('ArrowForwardIcon');
    fireEvent.click(backButton);
    expect(mockSetActiveIndex).toHaveBeenCalled();
  });
});
