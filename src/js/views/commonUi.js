import allUiElements from "./allUiElements";
const { loaderClass, loaderContainerClass } = allUiElements;

//Loading Show
export const showLoad = (parent) => {
  const loadingHtml = `
  <tr class="${loaderContainerClass}"><td colspan='3' style="text-align:center;"><div class="spinner-border ${loaderClass}"></div></td></tr>
  `;
  parent.insertAdjacentHTML("beforeend", loadingHtml);
};

//Loading ShowDiv
export const showLoadDiv = (parent) => {
  const loadingHtml = `
  <div class="${loaderContainerClass}"><div class="spinner-border ${loaderClass}"></div></div>
  `;
  parent.insertAdjacentHTML("beforeend", loadingHtml);
};

//Loading HideDiv
export const hideLoad = (parent) => {
  parent.removeChild(document.querySelector(`.${loaderContainerClass}`));
};
