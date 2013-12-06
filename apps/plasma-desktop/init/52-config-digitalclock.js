var findObjects = loadTemplate('org.cknow.plasma-desktop-scripting.findObjects');

var datetime = findObjects.findWidgetByType("digital-clock");
if (datetime != null && typeof datetime != "undefined") {
   datetime.writeConfig("defaultTimezone","Europe/Amsterdam");
   datetime.writeConfig("timeZones", "Europe/Amsterdam");
   datetime.writeConfig("timezone", "Europe/Amsterdam");
   datetime.writeConfig("showTimezone", false);
   print("DateTime widget configured, index: " + datetime.index);
} else {
   print("Unable to configure datetime widget");
}
