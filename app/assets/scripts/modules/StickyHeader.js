import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = document.getElementById("large-hero__title");
		this.arrowDown = $(".arrow-down");
		this.createColorWaypoint();
	}

	createColorWaypoint() {
		var that = this;
		new Waypoint({
			element: document.getElementById("large-hero__title"),
			handler: function (direction) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--fill-in-color");
					that.arrowDown.addClass("arrow-down--fade");
				} else {
					that.siteHeader.removeClass("site-header--fill-in-color");
					that.arrowDown.removeClass("arrow-down--fade");
				}
			},
			offset: "18%",
		});
	}
}

export default StickyHeader;
