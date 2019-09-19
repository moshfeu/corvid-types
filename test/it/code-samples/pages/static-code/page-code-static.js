import { session } from "wix-storage";
import wixLocation from "wix-location";

let previousPageURL;

$w.onReady(function() {
  $w("#text1").text = "hi"
  previousPageURL = session.getItem("page");
  session.setItem("page", wixLocation.url);
});
