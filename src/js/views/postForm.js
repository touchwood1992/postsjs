import allUiElements from "./allUiElements";
const {
  postForm,
  postTitle,
  postContent,
  postSubmitBtn,
  cancelUpdateBtn,
  cancelUpdateBtnCls,
} = allUiElements;
export const getinputVal = () => {
  const title = postTitle.value.trim();
  const content = postContent.value.trim();
  if (title === "" || content === "") {
    alert("Title and Content are required");
    return false;
  }
  return { title, content };
};

export const resetinputVal = () => {
  postTitle.value = "";
  postContent.value = "";
  postSubmitBtn.textContent = "Add Post";
  if (document.querySelector(`.${cancelUpdateBtnCls}`) !== null) {
    document.querySelector(`.${cancelUpdateBtnCls}`).remove();
  }
};

export const UpdatePostUi = (pObj) => {
  postTitle.value = pObj.title;
  postContent.value = pObj.content;
  postSubmitBtn.textContent = "Update Post";
  const btn = document.createElement("button");
  btn.textContent = "Cancel";
  btn.className = `${cancelUpdateBtn} ${cancelUpdateBtnCls}`;
  postForm.appendChild(btn);
};
