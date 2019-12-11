import { Component } from '@angular/core';


@Component({
	selector: 'new-library-form',
	template: `
		<div class="form-container">
			<form>
				<new-library-form-inputs></new-library-form-inputs>
				<create-library-button></create-library-button>
			</form>
		</div>
	`
})
export class NewLibraryFormComponent {
}
