import { newE2EPage } from '@stencil/core/testing';

describe('chat-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    const element = await page.find('chat-container');
    expect(element).toHaveClass('hydrated');
  });
});
