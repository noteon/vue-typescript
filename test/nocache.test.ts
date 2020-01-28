import * as Vue from 'vue'

import * as Utils from './_testutils'
import { expect } from 'chai'

import { VueComponent} from '../src/vuecomponent'
import { NoCache} from '../src/noCache'
describe('NoCache', function(){

    @VueComponent
    class ComputedTest {
        a:number = 5;
        b:number = 5;

        @NoCache
        get sum():number{
            return this.a + this.b;
        }

        set sum(s:number){
            this.a = s / 2;
            this.b = s / 2;
        }

        @NoCache
        get something():string {
            return 'something';
        }
    }

    var component = Utils.component('computed-test');

    it('should get function return', function(){
        expect(component.$options.computed.sum.cache).to.equal(false);
        expect(component.sum).to.equal(10);
        expect(component.$options.computed.sum.cache).to.equal(false);
        expect(component.something).to.equal('something');
    })

    it('should set properties', function(){
        expect(component.$options.computed.sum.cache).to.equal(false);
        component.sum = 20;
        expect(component.a).to.equal(10);
    })

})