import { render, screen } from '@testing-library/react'
import Button from './Button';

describe('Button', () => {
  it('renders', async () => {
    render(<Button>My Button</Button>);

    expect(await screen.findByRole('button', { name: /My Button/ })).toBeVisible()
  });
});
