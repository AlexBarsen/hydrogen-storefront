import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductGallery from '~/components/ProductGallery';

const mockMedia = [
  {
    alt: 'alt_1',
    id: 'id_1',
    image: {
      height: 560,
      url: 'url_1',
      width: 635,
    },
    mediaContentType: 'IMAGE',
    previewImage: {
      url: 'url_1',
      __typename: 'MediaImage',
    },
  },
  {
    alt: 'alt_2',
    id: 'id_2',
    image: {
      height: 560,
      url: 'url_2',
      width: 635,
    },
    mediaContentType: 'IMAGE',
    previewImage: {
      url: 'url_2',
      __typename: 'MediaImage',
    },
  },
];

describe('Should test ProductGallery Component', () => {
  it('should render component correctly', () => {
    render(<ProductGallery media={mockMedia} />);
    screen.debug();
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getAllByRole('img')[0]).toHaveAttribute(
      'alt',
      'Product Photo 0',
    );
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'url_1');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute(
      'alt',
      'Product Photo 1',
    );
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('src', 'url_2');
  });
});
