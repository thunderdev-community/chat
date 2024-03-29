import { newE2EPage } from '@stencil/core/testing';

describe('group-info', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('group-info');
    expect(element).toHaveClass('hydrated');
  });
});
