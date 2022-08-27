import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './homePage';

storiesOf('HomePage', module)
  .add('default HomePage', () => (
    <HomePage />
  ));
