import { Injectable } from '@angular/core';
import { AddImagesServicesModule } from '../add-images-services.module';
import { AlertsService as alerts } from '@services/alerts.service';
import { getArrayOfProperty } from '@writetome51/get-array-of-property';
import { getSum } from '@writetome51/get-sum-average-product';
import { not } from '@writetome51/not';


@Injectable({providedIn: AddImagesServicesModule})
export class UploadRequirementsCheckService {

	private __limitPerUpload = 30000000; // bytes
	private __legalTypes = ['jpg', 'png'];


	passes(files: FileList | File[]): boolean {
		if (this.__getTotalBytes(files) > this.__limitPerUpload) {
			alerts.setError(`That exceeds the 30 MB limit per upload`);
			return false;
		}
		if (this.__includesIllegalTypes(files)) {
			alerts.setError(
				`The files must be one of these types: ${this.__legalTypes.join(', ')}`
			);
			return false;
		}
		return true;
	}


	private __getTotalBytes(files: FileList | File[]): number {
		let bytesOfEach: number[] = getArrayOfProperty('size', [].concat(files));
		return getSum(bytesOfEach);
	}


	private __includesIllegalTypes(files: FileList | File[]) {
		for (let i = 0, length = files.length; i < length; ++i) {
			if (not(this.__legalTypes.includes(files[i].type))) return true;
		}
		return false;
	}

}
