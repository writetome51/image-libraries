import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitFormButtonComponent } from './submit-form-button.component';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';


@NgModule({
	declarations: [SubmitFormButtonComponent],
	imports: [CommonModule, StartDataProcessButtonModule],
	exports: [SubmitFormButtonComponent]
})
export class SubmitFormButtonModule {
}
