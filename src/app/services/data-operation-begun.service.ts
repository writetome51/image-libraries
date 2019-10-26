import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})

// This lets the app know when to display the loading spinner

export class DataOperationBegunService {

	waitingForResult = false; // if true, you should show loading spinner.

}
