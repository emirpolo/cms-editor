import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CmsImageComponent } from "./components/cms-image/cms-image.component";
import { CmsTextComponent } from "./components/cms-text/cms-text.component";
import { CmsHelloComponent } from "./components/cms-hello/cms-hello.component";
import { CmsTemplateItemComponent } from "./components/cms-template-item/cms-template-item.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CmsImageComponent,
    CmsTextComponent,
    CmsHelloComponent,
    CmsTemplateItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
