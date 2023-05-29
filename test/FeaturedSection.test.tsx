import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedSection from '../app/components/FeaturedSection';
import {flattenConnection} from '@shopify/hydrogen';
import {useFetcher, useMatches} from '@remix-run/react';
import React from 'react';

jest.mock('@shopify/hydrogen', () => ({
  flattenConnection: jest.fn(),
}));

jest.mock('@remix-run/react', () => ({
  ...jest.requireActual('@remix-run/react'),
  Link: ({
    to,
    onClick,
    children,
  }: {
    to: string;
    onClick?: () => void;
    children: React.ReactNode;
  }) => (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  ),
  useFetcher: jest.fn(),
  useMatches: jest.fn(),
}));

describe('FeaturedSection components test', () => {
  it('Should render the component correctly', () => {
    // const flattenCnnectionMock = flattenConnection as jest.Mock;
    const flattenedVariants = [
      {
        id: 'gid://shopify/Product/8423347945802',
        image: {
          url: 'test_URL',
          altText: null,
          height: 560,
          width: 635,
        },
        price: {
          amount: '20',
          currencyCode: 'RON',
        },
        product: {
          title: 'test_TITLE',
        },
      },
    ];

    const testMock = {
      featuredProducts: [
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

    (flattenConnection as jest.Mock).mockReturnValue(flattenedVariants);

    (useFetcher as jest.Mock).mockImplementation(() => ({
      load: mockLoad,
      data: testMock,
      error: null,
      loading: false,
    }));

    (useMatches as jest.Mock).mockImplementation(() => [
      {path: '/', name: 'home'},
      {path: '/about', name: 'about'},
    ]);

    render(<FeaturedSection />);
    expect(mockLoad).toHaveBeenCalledWith('/featured-products');
    expect(screen.getByText('Featured Products')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/products/test_HANDLE',
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test_URL');
    expect(screen.getByRole('img')).toHaveAttribute('title', 'test_TITLE');
    expect(screen.getByText('Go to product')).toBeInTheDocument();
    expect(screen.getByText('test_TITLE')).toBeInTheDocument();
    expect(screen.getByText('20 RON')).toBeInTheDocument();
  });
});
