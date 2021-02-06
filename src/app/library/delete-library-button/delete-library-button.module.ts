import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonComponent }
	from './delete-library-button.component';
import { NgModule } from '@angular/core';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button/execute-function-button.module';


@NgModule({
	declarations: [DeleteLibraryButtonComponent,],
	imports: [
		CommonModule,
		ExecuteFunctionButtonModule,
	],
	exports: [DeleteLibraryButtonComponent]
})
export class DeleteLibraryButtonModule {
}
