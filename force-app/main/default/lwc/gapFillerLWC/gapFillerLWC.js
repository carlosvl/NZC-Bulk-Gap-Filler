import { LightningElement, api } from 'lwc';

export default class GapFillerLWC extends LightningElement {
    // This public property will receive the JSON string from the Flow
    @api inputData;

    // Use a getter to safely parse the input string and return the data array
    get parsedData() {
        try {
            // Check if inputData has a value before parsing
            if (this.inputData) {
                // Parse the JSON string into a JavaScript object
                return JSON.parse(this.inputData);
            }
        } catch (error) {
            // If parsing fails, log the error and return an empty array
            console.error('Error parsing input JSON:', error);
        }
        // Return an empty array if there's no data or an error occurs
        return [];
    }
}