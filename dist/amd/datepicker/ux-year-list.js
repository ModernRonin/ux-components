var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "aurelia-binding", "aurelia-ux", "aurelia-ux"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, aurelia_binding_1, aurelia_ux_1, aurelia_ux_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxYearList = /** @class */ (function () {
        function UxYearList(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
            this.today = new Date();
        }
        UxYearList.prototype.created = function (_, myView) {
            this.today.setHours(0, 0, 0, 0);
            this.view = myView;
        };
        UxYearList.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
        };
        UxYearList.prototype.attached = function () {
            this.scrollToActive();
        };
        UxYearList.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxYearList.prototype.selectYear = function (year) {
            this.value = this.value.clone().set('year', year);
        };
        Object.defineProperty(UxYearList.prototype, "yearList", {
            get: function () {
                var yearList = [];
                var min = 1900;
                var max = 2100;
                if (this.minDate) {
                    min = this.minDate.year();
                }
                if (this.maxDate) {
                    max = this.maxDate.year();
                }
                while (min <= max) {
                    yearList.push(min);
                    min++;
                }
                return yearList;
            },
            enumerable: true,
            configurable: true
        });
        UxYearList.prototype.scrollToActive = function () {
            var selected = this.element.querySelector('div.selected');
            if (selected == null && this.element.children.length > 5) {
                selected = this.element.children[Math.round(this.element.children.length / 2)];
            }
            if (selected != null) {
                selected.scrollIntoView();
            }
        };
        __decorate([
            aurelia_templating_1.bindable
        ], UxYearList.prototype, "theme", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxYearList.prototype, "minDate", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxYearList.prototype, "maxDate", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UxYearList.prototype, "value", void 0);
        __decorate([
            aurelia_binding_1.computedFrom('minDate', 'maxDate')
        ], UxYearList.prototype, "yearList", null);
        UxYearList = __decorate([
            aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, aurelia_ux_1.StyleEngine),
            aurelia_templating_1.customElement('ux-year-list'),
            aurelia_templating_1.processAttributes(aurelia_ux_2.processDesignAttributes)
        ], UxYearList);
        return UxYearList;
    }());
    exports.UxYearList = UxYearList;
});
