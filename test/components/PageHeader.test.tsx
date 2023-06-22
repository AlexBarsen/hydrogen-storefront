import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import PageHeader from '../../app/components/PageHeader';

describe('PageHeader component test', () => {
  it('Should render component correctly', () => {
    render(<PageHeader title={'Rossignol'} imageUrl="rossignol.ro/img" />);
    screen.debug();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'rossignol.ro/img');
  });
});
