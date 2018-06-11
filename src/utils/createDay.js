import uuid from 'uuid';

const createDay = ({
  Day,
  title,
  icon = 'star',
  description,
  hours,
  screenName,
}) => ({
  Screen: Day,
  title,
  icon,
  description,
  hours,
  screenName,
  id: uuid.v4(),
});

export default createDay;
