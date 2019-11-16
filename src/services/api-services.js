const fetchShowPopularMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/week?api_key=008e2d6473aae855297c40f7a1cf3d30',
  )
    .then(res => res.json())
    .then(ob => ob.results);
};

const fetchShowsWithQuery = searchQuery => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=008e2d6473aae855297c40f7a1cf3d30&query=${searchQuery}`,
  )
    .then(res => res.json())
    .then(ob => ob.results);
};

const fetchShowDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=008e2d6473aae855297c40f7a1cf3d30`,
  ).then(res => res.json());
};

const fetchShowCast = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=008e2d6473aae855297c40f7a1cf3d30`,
  )
    .then(res => res.json())
    .then(ob => ob.cast);
};

const fetchShowReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=008e2d6473aae855297c40f7a1cf3d30`,
  )
    .then(res => res.json())
    .then(ob => ob.results);
};

export {
  fetchShowPopularMovies,
  fetchShowDetails,
  fetchShowCast,
  fetchShowReviews,
  fetchShowsWithQuery,
};
