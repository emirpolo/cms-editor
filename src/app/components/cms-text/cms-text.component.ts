import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { ViewMode } from "../../utils/types";

@Component({
  selector: "cms-text",
  templateUrl: "./cms-text.component.html",
  styleUrls: ["./cms-text.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CmsTextComponent {
  contentUpdate = new Subject<string>();

  @Input() mode: ViewMode = "RENDER";
  @Input() content = "";

  @Output() contentChange = new EventEmitter();

  constructor() {
    this.contentUpdate
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(this.onContentChange.bind(this));
  }

  onContentChange() {
    this.contentChange.emit(this.content);
  }
}
