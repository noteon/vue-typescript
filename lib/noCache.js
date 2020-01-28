"use strict";
var utils_1 = require('./utils');
function NoCache(first, second) {
    //Bare decorator (no params)
    if (second)
        noCacheDecorator()(first, second);
    else
        return noCacheDecorator();
}
exports.NoCache = NoCache;
function noCacheDecorator() {
    return function (target, key) {
        utils_1.DeveloperUtils.decoratorStart();
        //create the temp props holder if non existane
        if (!target.$$noCache)
            target.$$noCache = {};
        //if(!options) options = null;
        target.$$noCache[key] = true;
        //remove it from the instance so it is not added to data
        delete target[key];
        utils_1.DeveloperUtils.decoratorStop();
    };
}
//# sourceMappingURL=noCache.js.map