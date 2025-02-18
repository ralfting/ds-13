import { render, screen } from '@testing-library/react'
import Button from './Button';

describe('Button', () => {
  it('renders', async () => {
    render(<Button>My Button</Button>);

    expect(await screen.findByRole('button', { name: /My Button/ })).toBeVisible()
  });

  it('renders as a link', async () => {
    render(<Button as="a" href="www.mywebsite.com">My Button</Button>);

    expect(await screen.findByRole('link', { name: /My Button/ })).toBeVisible();
  });
});
