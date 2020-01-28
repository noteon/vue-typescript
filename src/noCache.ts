import { DeveloperUtils } from './utils'

export function NoCache(target:Object, key:string)
export function NoCache(first:any, second:string) {
    //Bare decorator (no params)
    if (second) noCacheDecorator()(first, second);
    //Decorator with params
    else return noCacheDecorator();
}

function noCacheDecorator() {
    return function(target:any, key:string) {
        DeveloperUtils.decoratorStart();
        //create the temp props holder if non existane
        if (!target.$$noCache) target.$$noCache = {};
        
        //if(!options) options = null;

        target.$$noCache[key] = true;
        //remove it from the instance so it is not added to data
        delete target[key];

        DeveloperUtils.decoratorStop();
    }
}