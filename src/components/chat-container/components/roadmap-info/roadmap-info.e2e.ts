import { newE2EPage } from '@stencil/core/testing';

describe('roadmap-info', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('roadmap-info');
    expect(element).toHaveClass('hydrated');
  });
});
