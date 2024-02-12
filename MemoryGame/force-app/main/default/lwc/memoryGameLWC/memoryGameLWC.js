import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformRersourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome';

export default class MemoryGameLWC extends LightningElement {

    // as renderedcallback is called everytime component is
    //  refreshed so to stop loading the fontawesome we have created a checkbox
    isLoaded = false;

    renderedCallback() {
        if (this.isLoaded) {
            return;
        } else {
            loadStyle(this, fontawesome + '/fontawesome/css/font-awesome.min.css').then(() => {
                console.log("loaded successfully");
            }).catch(error => {
                console.error(error);
            })
            this.isLoaded = true;
        }

    }
}