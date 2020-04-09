export default {
  post_api_uri: "https://postsjs-project.herokuapp.com/posts",
  comment_api_uri: "https://postsjs-project.herokuapp.com/comments",
};

export const getOffsetTop = (elem) => {
  var offsetTop = 0;
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
  } while ((elem = elem.offsetParent));
  return offsetTop;
};

export const scrollToTopFn = (offset) => {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: offset,
  });
};
