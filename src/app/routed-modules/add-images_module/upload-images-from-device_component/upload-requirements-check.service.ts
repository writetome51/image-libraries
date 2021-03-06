import { AddImagesServicesModule } from '../add-images-services.module';
import { AlertsService as alerts } from '@services/alerts.service';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { getArrFilled } from '@writetome51/get-arr-filled';
import { GetTotalBytesService as getTotalBytes } from './get-total-bytes.service';


@Injectable({providedIn: AddImagesServicesModule})
export class UploadRequirementsCheckService {

	private __byteLimitPerUpload = 31457280;
	private ____legalTypes = ['image/jpeg', 'image/jpg', 'image/png'];


	private get __legalTypes(): string[] {
		return getArrFilled(
			this.____legalTypes.length,
			(i) => this.____legalTypes[i].split('/')[1]
		);
	}


	passes(files: FileList | File[]): boolean {
		if (getTotalBytes.go(files) > this.__byteLimitPerUpload) {
			return this.__alertErrorAndReturnFalse(`That exceeds the 30 MB limit per upload`);
		}
		if (this.__includesIllegalTypes(files)) {
			return this.__alertErrorAndReturnFalse(
				`The files must be one of these types: ${this.__legalTypes.join(', ')}`
			);
		}
		return true;
	}


	private __alertErrorAndReturnFalse(message) {
		alerts.setError(message);
		return false;
	}


	private __includesIllegalTypes(files: FileList | File[]) {
		for (let i = 0, length = files.length; i < length; ++i) {
			if (not(this.____legalTypes.includes(files[i].type))) return true;
		}
		return false;
	}

}
