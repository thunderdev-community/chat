import { newE2EPage } from '@stencil/core/testing';

describe('roadmap-list', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('roadmap-list');
    expect(element).toHaveClass('hydrated');
  });
});
