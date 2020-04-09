import allUiElements from "./allUiElements";
const { allPostsContainer } = allUiElements;

const postRow = pRow => {
  const rowHtml = `<tr><td>${pRow.title}</td><td>${pRow.content}</td><td><a data-id=${pRow.id} href="javascript:void(0);" class="edit-post"><i class="text-danger fa fa-pencil-square-o" aria-hidden="true"></i>
  </a><a data-id=${pRow.id} href="javascript:void(0);" class="remove-post ml-2"><i class="text-danger fa fa-trash" aria-hidden="true"></i>
  </a></td></tr>`;
  allPostsContainer.insertAdjacentHTML("beforeend", rowHtml);
};

const noPosts = () => {
  allPostsContainer.insertAdjacentHTML(
    "beforeend",
    "<tr><td colspan='3' style='text-align:center;'>No posts Found</td></tr>"
  );
};
export const resetPostUi = () => (allPostsContainer.innerHTML = "");
export const showAllPosts = pArray => {
  if (pArray.length > 0) {
    //show row by row
    pArray.forEach(postRow);
  } else {
    //Show No result Found
    noPosts();
  }
};
