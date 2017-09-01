"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_pal_1 = require("aurelia-pal");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_ux_1 = require("aurelia-ux");
var aurelia_ux_2 = require("aurelia-ux");
var UxForm = /** @class */ (function () {
    function UxForm(element, resources, styleEngine) {
        this.element = element;
        this.resources = resources;
        this.styleEngine = styleEngine;
        this.theme = null;
        this.bindSubmitToEnter = false;
    }
    UxForm.prototype.created = function (_, myView) {
        this.view = myView;
    };
    UxForm.prototype.bind = function () {
        if (this.theme) {
            this.styleEngine.applyTheme(this, this.theme);
        }
        if (this.submitOnEnter !== undefined) {
            this.bindSubmitToEnter = true;
        }
    };
    UxForm.prototype.attached = function () {
        var _this = this;
        if (this.bindSubmitToEnter) {
            this.element.addEventListener('keyup', function (e) {
                var canSubmit = true;
                if (e.srcElement != null && e.srcElement.tagName === 'TEXTAREA') {
                    canSubmit = false;
                }
                if (e.keyCode === 13 && canSubmit) {
                    _this.submitForm();
                }
            });
        }
    };
    UxForm.prototype.detached = function () {
        var _this = this;
        if (this.bindSubmitToEnter) {
            this.element.removeEventListener('keyup', function (e) {
                if (e.keyCode === 13) {
                    _this.submitForm();
                }
            });
        }
    };
    UxForm.prototype.themeChanged = function (newValue) {
        this.styleEngine.applyTheme(this, newValue);
    };
    UxForm.prototype.submitForm = function () {
        var submitEvent = aurelia_pal_1.DOM.createCustomEvent('submit', { bubbles: true, target: this.element });
        this.element.dispatchEvent(submitEvent);
    };
    __decorate([
        aurelia_templating_1.bindable
    ], UxForm.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxForm.prototype, "submitOnEnter", void 0);
    UxForm = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, aurelia_ux_1.StyleEngine),
        aurelia_templating_1.customElement('ux-form'),
        aurelia_templating_1.processAttributes(aurelia_ux_2.processDesignAttributes)
    ], UxForm);
    return UxForm;
}());
exports.UxForm = UxForm;
