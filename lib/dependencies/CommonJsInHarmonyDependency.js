/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var NullDependency = require("./NullDependency");
var NullDependencyTemplate = require("./NullDependencyTemplate");
var CommonJsInHarmonyWarning = require("./CommonJsInHarmonyWarning");

function CommonJsInHarmonyDependency(originModule, name) {
	NullDependency.call(this);
	this.name = name;
	this.originModule = originModule;
}
module.exports = CommonJsInHarmonyDependency;

CommonJsInHarmonyDependency.prototype = Object.create(NullDependency.prototype);
CommonJsInHarmonyDependency.prototype.constructor = CommonJsInHarmonyDependency;
CommonJsInHarmonyDependency.prototype.type = "cjs in harmony";
CommonJsInHarmonyDependency.prototype.requireWebpackRequire = false;

CommonJsInHarmonyDependency.prototype.getErrors = function() {
	if(this.originModule && this.originModule.meta && this.originModule.meta.harmonyModule) {
		return [
			new CommonJsInHarmonyWarning(this.name, this.loc)
		];
	}
};

CommonJsInHarmonyDependency.Template = NullDependencyTemplate;
