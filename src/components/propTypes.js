import { shape, bool, number, string } from 'prop-types';

export const userType = shape({
  id: number.isDefined,
  shared: bool,
  email: string.isDefined,
});
