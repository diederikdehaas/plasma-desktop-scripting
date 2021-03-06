var findObjects = loadTemplate('org.cknow.plasma-desktop-scripting.findObjects');
var pnl = findObjects.findPanelByName("defaultPanel");
var sysldvwr = findObjects.findWidgetByType("systemloadviewer");
var datetime = findObjects.findWidgetByType("digital-clock");

if( pnl == null || typeof pnl == "undefined") {
   pnl = panels()[0];
}

if( sysldvwr == null || typeof sysldvwr == "undefined") {
   sysldvwr = pnl.addWidget("systemloadviewer");
   sysldvwr.writeConfig("show_multiple_cpus", true);
   sysldvwr.index = datetime.index;
}

