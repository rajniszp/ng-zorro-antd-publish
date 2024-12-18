"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownTemplateRule = void 0;
const schematics_1 = require("@angular/cdk/schematics");
const elements_1 = require("../../../utils/ng-update/elements");
class DropdownTemplateRule extends schematics_1.Migration {
    constructor() {
        super(...arguments);
        this.enabled = this.targetVersion === schematics_1.TargetVersion.V9;
    }
    visitTemplate(template) {
        const deprecatedComponent = (deprecated, instead) => {
            elements_1.findElementWithTag(template.content, deprecated)
                .forEach(offset => {
                this.failures.push({
                    filePath: template.filePath,
                    position: template.getCharacterAndLineOfPosition(offset),
                    message: `Found deprecated "<${deprecated}>" component. Use "${instead}" to instead please.`
                });
            });
        };
        deprecatedComponent('nz-dropdown', '[nz-dropdown]');
        deprecatedComponent('nz-dropdown-button', '[nz-dropdown]');
    }
}
exports.DropdownTemplateRule = DropdownTemplateRule;
//# sourceMappingURL=dropdown-template-rule.js.map