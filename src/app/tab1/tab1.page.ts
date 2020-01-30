import { Component, OnInit } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  public geo = this.geolocation.watchPosition({
    timeout: 30000,
    maximumAge: 0,
    enableHighAccuracy: true
  });

  constructor(private geolocation: Geolocation) {}

  public ngOnInit() {}
}
