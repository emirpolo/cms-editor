import {
  Component,
  Input,
  AfterViewInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { ViewMode } from "../../utils/types";

@Component({
  selector: "cms-image",
  templateUrl: "./cms-image.component.html",
  styleUrls: ["./cms-image.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CmsImageComponent implements AfterViewInit {
  srcUpdate = new Subject<string>();

  @Input() mode: ViewMode = "RENDER";
  @Input() src?: string;

  @ViewChild("file") file: ElementRef<HTMLInputElement>;

  @Output() srcChange = new EventEmitter();

  ngAfterViewInit() {
    this.srcUpdate
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(this.onSrcChange.bind(this));

    if (this.mode === "EDIT") this.initUploader();
  }

  onSrcChange() {
    this.srcChange.emit(this.src);
  }

  initUploader() {
    const reader = new FileReader();

    reader.onload = e => {
      this.src = e.target.result as string;
      this.onSrcChange();
    };

    this.file.nativeElement.addEventListener("change", e => {
      reader.readAsDataURL(e.target["files"][0]);
    });
  }
}
