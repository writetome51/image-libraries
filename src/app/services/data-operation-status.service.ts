import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})

// This lets the app know when to display the loading spinner

export class DataOperationStatusService {

	waitingForResult = false; // if true, show loading spinner.

}
