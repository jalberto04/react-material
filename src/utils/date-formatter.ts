import moment from 'moment';

export const formatTo = (value: string | number, format: string) => {
  return value ? moment(value).format(format) : null;
};

export const formatToDateOnly = (value: string | number) => {
  return value ? moment(value).format('DD MMMM YYYY') : null;
};
