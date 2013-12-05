function findWidgetIn(containment, type)
{
    var widgetIds = containment.widgetIds
    for (id in widgetIds) {
        var widget = containment.widgetById(widgetIds[id])
            if (widget.type == type) {
                //print("Found a " + type + " tray with id " + widget.id + " in " + containment.type + " with id " + containment.id)
		return widget;
            }
    }
}

this.findWidgetByType = function(type)
{
    for (i in panelIds) {
        return findWidgetIn(panelById(panelIds[i]), type);
    }

    for (i in activityIds) {
        return findWidgetIn(activityById(activityIds[i]), type);
    }
}

this.findPanelByName = function(panelName)
{
	for (i in panelIds) {
		var panel = panelById(panelIds[i]);
		if (panel.name == panelName) {
			return panel;
		}
	}
}
