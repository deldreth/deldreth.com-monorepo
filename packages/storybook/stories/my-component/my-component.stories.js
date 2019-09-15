import { document } from "global";

import myComponentHtml from "./my-component.html";

export default {
  title: "my-component"
};

export const basic = () => {
  return myComponentHtml;
};
