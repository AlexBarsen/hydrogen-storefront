import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedCollections from '~/components/FeaturedCollections';
import React from 'react';
import {Collection} from '@shopify/hydrogen-react/storefront-api-types';
import {BrowserRouter} from 'react-router-dom';

const mockCollections: Collection[] = [
  {
    description: 'Buff Headwear',
    descriptionHtml: 'buff',
    handle: 'buff',
    id: 'buff',
    metafields: [],
    products: {
      edges: [],
      filters: [],
      nodes: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    image: {
      src: 'buff.ro',
      transformedSrc: 'buff.ro',
      originalSrc: 'buff.ro',
      url: 'buff.ro',
    },
    seo: {},
    title: 'BUFF',
    updatedAt: '1',
  },
  {
    description: 'Rossignol Equipment',
    descriptionHtml: 'rossignol',
    handle: 'rossingol',
    id: 'ross',
    metafields: [],
    products: {
      edges: [],
      filters: [],
      nodes: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    image: {
      src: 'rossignol.ro',
      transformedSrc: 'rossignol.ro',
      originalSrc: 'rossignol.ro',
      url: 'rossignol.ro',
    },
    seo: {},
    title: 'ROSSIGNOL',
    updatedAt: '1',
  },
];

describe('FeautredCollections component test', () => {
  it('Should render component correctly', () => {
    render(
      <FeaturedCollections collections={mockCollections} title="Collections" />,
      {wrapper: BrowserRouter},
    );
    screen.debug();
    expect(screen.getByText('BUFF')).toBeInTheDocument();
    expect(screen.getAllByRole('link')[0]).toHaveAttribute(
      'href',
      '/collections/buff',
    );
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'buff.ro');
    expect(screen.getByText('ROSSIGNOL')).toBeInTheDocument();
    expect(screen.getAllByRole('link')[1]).toHaveAttribute(
      'href',
      '/collections/rossingol',
    );
    expect(screen.getAllByRole('img')[1]).toHaveAttribute(
      'src',
      'rossignol.ro',
    );
  });
});
