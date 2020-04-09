import allUiElements from "./views/allUiElements";
const { allPostsContainer, postForm, cancelUpdateBtnCls } = allUiElements;
import { showLoad, hideLoad, showLoadDiv } from "./views/commonUi";
import {
  PostModel,
  PostModelAdd,
  PostModelDelete,
  PostModelgetPost,
  PostModelPut,
} from "./models/PostsModel";
import { resetPostUi, showAllPosts } from "./views/allPosts";
import { getinputVal, resetinputVal, UpdatePostUi } from "./views/postForm";
import { getOffsetTop, scrollToTopFn } from "./config";

//Default state
const state = {};

//on load get Posts
document.addEventListener("DOMContentLoaded", () => {
  resetinputVal();
  loadAllPosts();
});
const loadAllPosts = async () => {
  try {
    //Reset Posts In ui
    resetPostUi();
    //Show loading
    showLoad(allPostsContainer);
    //Get All posts
    const allPosts = new PostModel();
    await allPosts.getAllPosts();

    //Pass to UI
    showAllPosts(allPosts.allPostsAr);
    //Hide loading
    hideLoad(allPostsContainer);
  } catch (error) {
    alert(error);
  }
};

//On submit save posts
postForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const vals = getinputVal();
  if (vals) {
    try {
      //Show loading
      showLoadDiv(postForm);
      //Decide add OR update
      if (state.update !== undefined) {
        //Update
        const updatePost = new PostModelPut(
          state.update.id,
          vals.title,
          vals.content
        );
        await updatePost.updatePost();
        deleteState("update");
      } else {
        //Add
        //Save to database
        const newPost = new PostModelAdd(vals.title, vals.content);
        await newPost.createPosts();
      }
      //Reset Input
      resetinputVal();
      //Hide loading
      hideLoad(postForm);
      //Load all posts
      loadAllPosts();
    } catch (error) {
      alert(error);
    }
  }
});

//Delete OR EDIT posts now
allPostsContainer.addEventListener("click", (e) => {
  const target = e.target.parentElement;
  if (target.classList.contains("remove-post")) {
    deletePost(target);
  }
  if (target.classList.contains("edit-post")) {
    //Update Post Call
    editPostGetVal(target);
  }
});

const deletePost = async (target) => {
  const c = confirm("Are you sure?");
  if (c) {
    //Get Id of post
    const id = target.dataset.id;
    try {
      //Show loading
      showLoad(target.parentElement);
      const removePost = new PostModelDelete(id);
      await removePost.deletePost(id);
      loadAllPosts();
    } catch (error) {
      alert(error);
    }
  }
};
//Edit post call
const editPostGetVal = async (target) => {
  //Get Id of post
  const id = target.dataset.id;
  try {
    //Show Load
    showLoadDiv(target.parentElement);
    const postobj = new PostModelgetPost(id);
    await postobj.getPost();
    //Pass this post to ui to show it
    UpdatePostUi(postobj.updatePostData);
    //Hide Load
    hideLoad(target.parentElement);
    //Scroll to top
    scrollToTopFn(getOffsetTop(postForm));
    //setting state for update
    state.update = { id: id };
  } catch (error) {
    alert(error);
  }
};

const deleteState = (ky) => {
  state[ky] !== undefined ? delete state[ky] : "";
};

postForm.addEventListener("click", (e) => {
  if (e.target.classList.contains(`${cancelUpdateBtnCls}`)) {
    e.preventDefault();
    resetinputVal();
    deleteState("update");
  }
});

const stateGet = () => state;
