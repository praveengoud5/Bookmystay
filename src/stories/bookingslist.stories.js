import React from 'react';

import BookingsList, { bookingsList } from '../components/bookings/bookingsList';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'BookingList',
  component: BookingsList,
};

export const Primary = () => <BookingList primary></BookingList>