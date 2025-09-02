import { LightningElement, api } from 'lwc';

export default class GapFillerLWC extends LightningElement {

    @api inputData; // This will receive the JSON string from the Flow

    get parsedData() {
        try {
            if (this.inputData) {
                // Parse the JSON string from the flow into a live JavaScript object
                return JSON.parse(this.inputData);
            }
        } catch (error) {
            console.error('Error parsing input JSON from Flow:', error);
        }
        return []; // Return an empty array if there's an error or no data
    }
}