import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
	constructor() {
		this.siteHeader = document.getElementsByClassName("site-header")[0];
		this.headerTriggerElement = document.getElementById("hero__title");
		this.arrowDown = document.querySelector(".arrow-down");
		console.log("arrowDown", this.arrowDown);
		this.createColorWaypoint();
	}

	createColorWaypoint() {
		var that = this;
		new Waypoint({
			element: document.getElementById("hero__title"),
			handler: function (direction) {
				that.siteHeader.classList.add("site-header--fill-in-color");
				if (that.siteHeader.classList.contains("site-header--transparent")) {
					if (direction == "down") {
						that.arrowDown.classList.add("arrow-down--fade");
					} else {
						that.siteHeader.classList.remove("site-header--fill-in-color");
						that.arrowDown.classList.remove("arrow-down--fade");
					}
				}
			},
			offset: "18%",
		});
	}
}

export default StickyHeader;
