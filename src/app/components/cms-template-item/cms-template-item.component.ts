import {
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";

import { ViewMode, User, CmsData } from "../../utils/types";
import { CmsTextComponent } from "../cms-text/cms-text.component";
import { CmsImageComponent } from "../cms-image/cms-image.component";
import { CmsHelloComponent } from "../cms-hello/cms-hello.component";

@Component({
  selector: "cms-template-item",
  template: `
    <ng-template #pagecontainer></ng-template>
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CmsTemplateItemComponent implements OnInit, OnChanges {
  componentMap = {
    hello: CmsHelloComponent,
    text: CmsTextComponent,
    image: CmsImageComponent
  } as any;

  @Input() mode: ViewMode = "RENDER";
  @Input() data: CmsData;
  @Input() user?: User;

  @Output() componentChange = new EventEmitter();

  @ViewChild("pagecontainer", { static: true, read: ViewContainerRef }) entry;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  init() {
    this.entry.clear();
    this.createComponent(this.data, this.componentMap[this.data.type]);
  }

  createComponent(data, component = CmsHelloComponent) {
    const factory = this.resolver.resolveComponentFactory(component);
    const ref = this.entry.createComponent(factory);
    this.setProperties(data, ref.instance);
  }

  setProperties(data: CmsData, instance) {
    instance.mode = this.mode;
    const onChange = e => this.componentChange.emit(e);

    switch (data.type) {
      case "image":
        instance.src = data.value;
        instance.srcChange.subscribe(onChange);
        break;

      case "text":
        instance.content = data.value;
        instance.contentChange.subscribe(onChange);
        break;

      case "hello":
        instance.user = this.user.username;
        instance.timestamp = this.user.timestamp;
        break;
    }
  }
}
