import { document } from "global";

import myComponentHtml from "./my-component.html";

export default {
  title: "Components"
};

export const myComponent = () => {
  return myComponentHtml;
};
