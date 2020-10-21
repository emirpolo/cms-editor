import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  timestamp;

  constructor() {
    this.timestamp = new Date();
  }

  getUserInfo() {
    return {
      username: "Emiro Arrieta",
      timestamp: this.timestamp
    };
  }
}
