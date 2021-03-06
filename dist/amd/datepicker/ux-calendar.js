var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-binding", "aurelia-ux", "aurelia-ux", "aurelia-dependency-injection", "moment", "./resources/datetime-utility"], function (require, exports, aurelia_templating_1, aurelia_binding_1, aurelia_ux_1, aurelia_ux_2, aurelia_dependency_injection_1, moment, datetime_utility_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxCalendar = /** @class */ (function () {
        function UxCalendar(resources, styleEngine) {
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
            this.weekdays = moment.weekdays();
            this.calendarRows = new Array();
        }
        UxCalendar.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxCalendar.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            this.displayMonth = this.value.clone();
        };
        UxCalendar.prototype.previousMonth = function () {
            this.displayMonth = this.displayMonth.clone().subtract(1, 'month');
        };
        UxCalendar.prototype.nextMonth = function () {
            this.displayMonth = this.displayMonth.clone().add(1, 'month');
        };
        UxCalendar.prototype.changeCalendarSelection = function (newDate) {
            var modifiedDate = this.value.clone()
                .set('date', newDate.date())
                .set('month', newDate.month())
                .set('year', newDate.year());
            if (this.isValidDate(modifiedDate)) {
                return;
            }
            this.value = modifiedDate;
        };
        UxCalendar.prototype.displayMonthChanged = function (newDate) {
            this.calendarRows = new Array();
            var clonedDate = newDate.clone();
            var firstDay = clonedDate.startOf('month').weekday();
            var daysInMonth = newDate.daysInMonth();
            var currentWeek = new Array();
            while (currentWeek.length < firstDay) {
                currentWeek.push(null);
            }
            for (var index = 0; index < daysInMonth; index++) {
                currentWeek.push(clonedDate.clone().add(index, 'days'));
                if (currentWeek.length === 7) {
                    this.calendarRows.push(currentWeek);
                    currentWeek = new Array();
                }
            }
            if (currentWeek.length > 0) {
                while (currentWeek.length < 7) {
                    currentWeek.push(null);
                }
                this.calendarRows.push(currentWeek);
            }
        };
        UxCalendar.prototype.isValidDate = function (date) {
            return datetime_utility_1.DatetimeUtility.dateOutOfRange(date, this.minDate, this.maxDate, this.config);
        };
        __decorate([
            aurelia_templating_1.bindable
        ], UxCalendar.prototype, "theme", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxCalendar.prototype, "weekdays", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxCalendar.prototype, "minDate", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxCalendar.prototype, "maxDate", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxCalendar.prototype, "value", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxCalendar.prototype, "config", void 0);
        __decorate([
            aurelia_binding_1.observable
        ], UxCalendar.prototype, "displayMonth", void 0);
        UxCalendar = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_templating_1.ViewResources, aurelia_ux_1.StyleEngine),
            aurelia_templating_1.customElement('ux-calendar'),
            aurelia_templating_1.processAttributes(aurelia_ux_2.processDesignAttributes)
        ], UxCalendar);
        return UxCalendar;
    }());
    exports.UxCalendar = UxCalendar;
});
