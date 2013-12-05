var findObjects = loadTemplate('org.cknow.plasma-desktop-scripting.findObjects');
var pnl = findObjects.findPanelByName("defaultPanel");
var batt = findObjects.findWidgetByType("battery");
var datetime = findObjects.findWidgetByType("digital-clock");

if (pnl == null || typeof pnl == "undefined") {
   pnl = panels()[0];
}

if (batt == null || typeof batt == "undefined") {
   if (hasBattery == true) {
      batt = pnl.addWidget("battery");
      batt.index = datetime.index;
   }
}

