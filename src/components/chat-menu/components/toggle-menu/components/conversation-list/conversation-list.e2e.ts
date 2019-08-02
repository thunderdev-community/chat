import { newE2EPage } from '@stencil/core/testing';

describe('conversation-list', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('conversation-list');
    expect(element).toHaveClass('hydrated');
  });
});
