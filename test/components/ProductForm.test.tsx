import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductForm from '~/components/ProductForm';
import {
  useLoaderData,
  useNavigation,
  useMatches,
  useFetcher,
} from '@remix-run/react';

jest.mock('@remix-run/react', () => ({
  useLoaderData: jest.fn(),
  useSearchParams: () => [new URLSearchParams({size: '2'})],
  useNavigation: jest.fn(),
  useLocation: () => ({
    pathname: 'buff.ro/path',
  }),
  useNavigate: jest.fn(),
  useMatches: jest.fn(),
  useFetcher: jest.fn(),
}));

jest.mock('@shopify/remix-oxygen', () => ({
  defer: jest.fn(),
}));

jest.mock('@shopify/hydrogen', () => ({
  AnalyticsPageType: jest.fn(),
  Money: jest.fn(),
  ShopifyAnalyticsProduct: jest.fn(),
  CacheShort: jest.fn(),
}));

jest.mock('~/data/cache', () => ({
  generateCacheControlHeader: jest
    .fn()
    .mockReturnValue('mocked-cache-control-value'),
}));

describe('ProductForm component Tests', () => {
  beforeEach(() => {
    (useLoaderData as jest.Mock).mockReturnValue({
      product: {
        variants: {
          nodes: [
            {
              id: 'variant1',
              availableForSale: true,
              selectedOptions: [
                {name: 'Red', value: 'Red'},
                {name: 'Medium', value: 'Medium'},
              ],
              price: {
                amount: '19.99',
              },
              compareAtPrice: {
                amount: '29.99',
              },
            },
          ],
        },
        options: [
          {name: 'Color', values: ['Red', 'Blue', 'Green']},
          {name: 'Size', values: ['Small', 'Medium', 'Large']},
        ],
      },
      analytics: {
        products: [
          {
            productGid: 'product1',
            variantGid: 'variant1',
            name: 'Product 1',
            variantName: 'Variant 1',
            brand: 'Brand 1',
            price: '19.99',
          },
        ],
      },
    });
  });

  (useNavigation as jest.Mock).mockReturnValue({
    location: {search: '?param=value'},
  });

  const mockForm = jest.fn().mockImplementation(({children}) => children);

  (useFetcher as jest.Mock).mockImplementation(() => ({
    Form: mockForm,
  }));

  (useMatches as jest.Mock).mockReturnValue([
    {path: '/about', params: {}, data: {selectedLocale: 'RO'}},
  ]);
  it('Should render ProductForm component with children', () => {
    render(<ProductForm />);
    expect(screen.getAllByText('Color')).toHaveLength(2);
    expect(screen.getAllByText('Size')).toHaveLength(2);
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
    expect(screen.getByText('Add product details etc.')).toBeInTheDocument();
  });

  it('Should change ProductOptions select', () => {
    render(<ProductForm />);
    const colorInput = screen.getAllByRole('button')[0];
    fireEvent.change(colorInput, {target: {values: 'Red'}});
    fireEvent.change(colorInput, {target: {values: 'Blue'}});

    const sizeInput = screen.getAllByRole('button')[1];
    fireEvent.change(sizeInput, {target: {values: 'Medium'}});
    fireEvent.change(sizeInput, {target: {values: 'Large'}});
  });

  it('Should fire Add To Cart Action', () => {
    render(<ProductForm />);
    const addToCartButton = screen.getAllByRole('button')[2];
    fireEvent.click(addToCartButton);
    expect(addToCartButton).toHaveAttribute('type', 'submit');
  });
});
