import { newE2EPage } from '@stencil/core/testing';

describe('toggle-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('toggle-menu');
    expect(element).toHaveClass('hydrated');
  });
});
