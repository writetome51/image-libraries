import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class DataURLExtractorService {


	dataURLs = [];
	private __doneExtracting = false;


	get doneExtracting(): boolean {
		return this.__doneExtracting;
	}


	async extract(files: FileList) {
		this.__doneExtracting = false;
		this.dataURLs = [];

		return new Promise((resolve) => {
			[].forEach.call(files,
				(file, index, files) => {

					const reader = new FileReader();

					reader.onload = () => {
						this.dataURLs.push(reader.result);

						if (this.dataURLs.length === files.length) { // If finished reading each file...
							resolve(this.dataURLs);
							this.__doneExtracting = true;
						}
					};

					reader.readAsDataURL(file);
				}
			);
		});
	}


}
