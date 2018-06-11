import createDay from '../../utils/createDay';
import StopWatch from './StopWatch';
import AnotherDay from './AnotherDay';

export default [
  createDay({
    Day: StopWatch,
    screenName: 'StopWatch',
    icon: 'stopwatch',
    title: 'Stop Watch',
    description: 'Simple Stop watch that can start, stop and create a new lap',
    hours: 4,
  }),
  createDay({
    Day: AnotherDay,
    screenName: 'AnotherDay',
    title: 'Another Day',
    description: '',
  }),
];
