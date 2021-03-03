import { CommonModule } from '@angular/common';
import { DeleteLibraryButtonComponent } from './delete-library-button.component';
import { NgModule } from '@angular/core';
import { ExecuteFunctionButtonModule }
	from '@app/shared/modules/execute-function-button_module/execute-function-button.module';
import { DeleteLibraryButtonServicesModule } from './delete-library-button-services.module';


@NgModule({
	declarations: [DeleteLibraryButtonComponent],
	imports: [
		CommonModule,
		ExecuteFunctionButtonModule,
		DeleteLibraryButtonServicesModule
	],
	exports: [DeleteLibraryButtonComponent]
})
export class DeleteLibraryButtonModule {
}
