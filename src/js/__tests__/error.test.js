/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import ErrorRepository from '../app';

const error = new ErrorRepository();

test('error test', () => {
  const error400 = 'плохой запрос';
  expect(error.translate(400)).toBe(error400);
});

test('test Unknown error', () => {
  expect(() => {
    error.translate(406);
  }).toThrow(Error);
});
