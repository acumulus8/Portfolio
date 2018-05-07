import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(element, offset, hiddenClass, visibleClass) {
        this.elementToReveal = element;
        this.offsetPercentage = offset.bind;
        this.hiddenClass = hiddenClass;
        this.visibleClass = visibleClass;
        this.hideInitially();
        this.createWaypoint();
    }

    hideInitially() {
        this.elementToReveal.addClass(this.hiddenClass);
    }

    createWaypoint() {
        const that = this;
        this.elementToReveal.each(function() {
            let currentItem = this;
            new Waypoint ({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass(that.visibleClass);
                },
                offset: that.offsetPercentage
            });
        }) ;
    }
}

export default RevealOnScroll;