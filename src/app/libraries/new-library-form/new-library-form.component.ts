import { Component, OnInit } from '@angular/core';
import { ClearFormDataService as clearFormData } from '@services/clear-form-data.service';


@Component({
	selector: 'new-library-form',
	template: `
		<div class="form-container">
			<form>
				<new-library-form-input></new-library-form-input>
				<create-library-button></create-library-button>
			</form>
		</div>
	`
})
export class NewLibraryFormComponent implements OnInit {

	ngOnInit(): void {
		clearFormData.go();
	}
}
