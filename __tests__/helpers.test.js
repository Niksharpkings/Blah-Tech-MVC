
const {format_date, format_plural, format_url} =require('../utils/helpers');

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('https://github.com/Niksharpkings/Yapping-MVC');
  const url2 = format_url('https://www.wikipedia.com');
  const url3 = format_url('https://www.google.com/?q=hello');

  expect(url1).toBe('github.com');
  expect(url2).toBe('wikipedia.com');
  expect(url3).toBe('google.com');
});

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('fox', 1);
  const word2 = format_plural('rock', 2);

  expect(word1).toBe('fox');
  expect(word2).toBe('rocks');
});

test('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');

  expect(format_date(date)).toBe('3/20/2020');
});