import { newE2EPage } from '@stencil/core/testing';

describe('input-chat', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('input-chat');
    expect(element).toHaveClass('hydrated');
  });
});
