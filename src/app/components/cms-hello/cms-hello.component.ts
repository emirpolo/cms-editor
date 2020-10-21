import { Component, Input, ViewEncapsulation } from "@angular/core";
import { ViewMode } from "../../utils/types";

@Component({
  selector: "cms-hello",
  templateUrl: "./cms-hello.component.html",
  styleUrls: ["./cms-hello.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CmsHelloComponent {
  @Input() mode: ViewMode = "RENDER";
  @Input() user = "Anonymous";
  @Input() timestamp = new Date();

  constructor() {}
}
