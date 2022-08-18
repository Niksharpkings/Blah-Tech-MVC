
module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  format_url: url => {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
  },
  format_plural: (word, count) => {
    return count === 1 ? word : `${word}s`;
  },
};
