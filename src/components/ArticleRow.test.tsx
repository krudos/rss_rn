import React from 'react';
import {render} from '@testing-library/react-native';
import {ArticleRow} from './ArticleRow';
import {FeedItem} from 'react-native-rss-parser';
describe('ArticleItem', () => {
  test('renders correctly', () => {
    // @ts-ignore
    const mock: FeedItem = {
      content: '',
      description: '',
      itunes: {
        authors: undefined,
        block: undefined,
        duration: '',
        explicit: '',
        image: undefined,
        isClosedCaptioned: undefined,
        order: undefined,
        subtitle: '',
        summary: undefined,
      },
      links: [{url: '', rel: ''}],
      published: '',
      id: '123',
      title: 'test',
    };
    const {toJSON} = render(<ArticleRow data={mock} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
