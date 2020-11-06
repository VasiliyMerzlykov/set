import ErrorRepository, { errors } from '../app';

test('The error code exists', () => {
  const error = new ErrorRepository();
  expect(error.translate(0)).toBe('Unknown error');
});

test.each(errors)(('Check code and text'),
  (code, text) => {
    const error = new ErrorRepository();
    expect(error.translate(code)).toBe(text);
  });
