import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveChangesButtonComponent } from './save-changes-button.component';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';


@NgModule({
	declarations: [SaveChangesButtonComponent],
	imports: [CommonModule, StartDataProcessButtonModule],
	exports: [SaveChangesButtonComponent]
})
export class SaveChangesButtonModule {
}
