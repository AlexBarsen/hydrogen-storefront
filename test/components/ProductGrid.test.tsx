import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductGrid from '../../app/components/ProductGrid';
import {Collection} from '@shopify/hydrogen/storefront-api-types';
import {useFetcher} from '@remix-run/react';
import {BrowserRouter} from 'react-router-dom';

jest.mock('@shopify/hydrogen', () => ({
  flattenConnection: jest.fn(),
}));

jest.mock('@remix-run/react', () => ({
  ...jest.requireActual('@remix-run/react'),
  useFetcher: jest.fn(),
}));

const mockCollection: Collection = {
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
      endCursor: 'test',
    },
  },
  seo: {},
  title: 'BUFF',
  updatedAt: '1',
};

const testMock = {
  products: [
    {
      id: 'test_ID',
      handle: 'test_HANDLE',
      title: 'test_TITLE',
      variants: {
        nodes: [
          {
            image: {
              url: 'test_URL',
              altText: null,
              height: 560,
              width: 635,
            },
            price: {
              amount: '20',
              currency: 'RON',
            },
          },
        ],
      },
    },
  ],
  featuredCollections: [
    {
      id: 'test_ID',
      title: 'test_TITLE',
    },
  ],
};

const mockLoad = jest.fn();

describe('FeautredCollections component test', () => {
  (useFetcher as jest.Mock).mockImplementation(() => ({
    load: mockLoad,
    data: false,
    error: null,
    loading: false,
  }));

  it('Should render no products found text', () => {
    render(<ProductGrid url="shopify.com" collection={mockCollection} />, {
      wrapper: BrowserRouter,
    });
    screen.debug();
    expect(
      screen.getByText('No products found on this collection'),
    ).toBeInTheDocument();
    expect(screen.getByText('Browse catalog')).toBeInTheDocument();
  });
});
