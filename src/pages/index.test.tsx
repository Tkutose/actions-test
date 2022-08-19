import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './';


describe('pages/index', () => {
  test('[role=main]を1つだけ識別できるか', () => {
    const { getByRole} = render(<Home />);
    const main = getByRole('main');
    expect(main).toBeInTheDocument();  
  });
});