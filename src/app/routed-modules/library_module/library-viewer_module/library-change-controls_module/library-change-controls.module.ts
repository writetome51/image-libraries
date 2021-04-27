import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveChangesButtonComponent } from './save-changes-button.component';
import { UndoChangesButtonComponent } from './undo-changes-button.component';
import { LibraryChangeControlsComponent } from './library-change-controls.component';
import { ExecuteFunctionButtonModule }
	from '@execute-function-button_module/execute-function-button.module';


@NgModule({
	declarations: [
		LibraryChangeControlsComponent,
		SaveChangesButtonComponent,
		UndoChangesButtonComponent
	],
	imports: [CommonModule, ExecuteFunctionButtonModule],
	exports: [LibraryChangeControlsComponent]
})
export class LibraryChangeControlsModule {}
