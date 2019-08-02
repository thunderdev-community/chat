import { newE2EPage } from '@stencil/core/testing';

describe('chat-header', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('chat-header');
    expect(element).toHaveClass('hydrated');
  });
});
