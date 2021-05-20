import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMessageCenterComponent } from './app-message-center.component';
import { AppAlertsModule } from './app-alerts_module/app-alerts.module';
import { UploadingFilesProgressBarComponent }
	from './uploading-files-progress-bar.component';
import { DeletingFilesProgressBarComponent }
	from './deleting-files-progress-bar.component';
import { ProgressBarComponent } from './progress-bar.component';


@NgModule({
	declarations: [
		AppMessageCenterComponent,
		ProgressBarComponent,
		UploadingFilesProgressBarComponent,
		DeletingFilesProgressBarComponent
	],
	imports: [
		CommonModule,
		AppAlertsModule
	],
	exports: [AppMessageCenterComponent]
})
export class AppMessageCenterModule {}
