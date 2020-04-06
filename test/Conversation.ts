import {expect} from 'chai';
import Conversation from '../Conversation';
import * as json from "../troubleshooting.json";
import 'mocha';


describe('Conversation class', () => {

    let conv = new Conversation(json);
    

    it(`Return initialState on empty string`, () => {
        expect(conv.reply('')).to.equal('start');
    });

    it('Return routerReset on `my internet doesnt work` answer', () => {
        expect(conv.reply(`My internet doesn't work`)).to.equal('routerReset');
    });

    it(`Return resetRouterEnd on 'No' answer`, () => {
        expect(conv.reply('No')).to.equal('resetRouterEnd');
    });

    it(`Return initialState on empty string after one conversation pass`, () => {
        expect(conv.reply('')).to.equal('start');
    });

    it(`Return 'phoneModel' on 'My phone doesn't work' answer`, ()=> {
        expect(conv.reply(`My phone doesn't work`)).to.equal('phoneModel');
    });

    it(`Return 'phoneModel' on invalid answer`, ()=> {
        expect(conv.reply(`icantletyoudothatjohn`)).to.equal('phoneModel');
    });


})