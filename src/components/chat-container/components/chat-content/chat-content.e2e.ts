import { newE2EPage } from '@stencil/core/testing';

describe('chat-content', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('chat-content');
    expect(element).toHaveClass('hydrated');
  });
});
