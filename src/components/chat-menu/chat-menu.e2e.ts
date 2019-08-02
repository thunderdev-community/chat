import { newE2EPage } from '@stencil/core/testing';

describe('chat-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('chat-menu');
    expect(element).toHaveClass('hydrated');
  });
});
