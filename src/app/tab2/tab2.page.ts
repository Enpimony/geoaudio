import { Component } from "@angular/core";
import {
  CaptureAudioOptions,
  CaptureError,
  MediaCapture,
  MediaFile
} from "@ionic-native/media-capture/ngx";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  constructor(private mediaCapture: MediaCapture) {}

  public recordAudio() {
    const options: CaptureAudioOptions = {
      limit: 3
    };
    this.mediaCapture.captureAudio(options).then(
      (data: MediaFile[]) => {
        console.log(data);
      },
      (err: CaptureError) => {
        console.error(err);
      }
    );
  }
}
