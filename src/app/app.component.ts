import { Component, OnInit } from "@angular/core";
import { CmsService } from "./services/csm.service";
import { UserService } from "./services/user.service";
import { ViewMode, User, CmsData } from "./utils/types";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  pageData: CmsData[] = [];
  mode: ViewMode = "EDIT";
  user: User;

  constructor(
    private csmService: CmsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.pageData = this.csmService.getPageData() as CmsData[];
    this.user = this.userService.getUserInfo();
  }

  toggleMode() {
    this.mode = this.mode === "EDIT" ? "RENDER" : "EDIT";
  }

  add(type) {
    this.pageData.push({ type, value: "" });
  }

  delete(index: number) {
    this.pageData.splice(index, 1);
  }

  dataChangeHandler(index: number) {
    return (newValue: any) => {
      this.pageData[index].value = newValue;
    };
  }
}
