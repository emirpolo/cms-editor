import { Injectable } from "@angular/core";
import { CmsData } from "../utils/types";

@Injectable({
  providedIn: "root"
})
export class CmsService {
  constructor() {}

  getPageData() {
    return [
      { type: "hello" },
      {
        type: "text",
        value: `<h1>Hi yall!!</h1> 
        <i>this data came from cms.service</i><br/>
        this is a amazing team! good job! well done.`
      },
      {
        type: "image",
        value:
          "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=200&q=80"
      }
    ] as CmsData[];
  }
}
