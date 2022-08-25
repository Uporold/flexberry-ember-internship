export function getQuery(search = "", tags_like = "") {
  const tagsLike = tags_like.replace(/\s*,\s*/g, ",");
  switch (true) {
    case !!(search && tags_like):
      return `?q=${search}&tags_like=${tagsLike}`;
    case search && !tags_like:
      return `?q=${search}`;
    case tags_like && !search:
      return `?tags_like=${tagsLike}`;
    default:
      return "";
  }
}

export function getAverageBookRating(bookReports) {
  let ratingSum = 0;
  bookReports.forEach(report => {
    ratingSum = ratingSum + report.bookRating;
  });
  return Math.floor(ratingSum / bookReports.length);
}
