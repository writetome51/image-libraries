/********************
Simplifies javascript's built-in FileReader class
( https://developer.mozilla.org/en-US/docs/Web/API/FileReader ).
 ********************/


export abstract class FileReaderService {

	readonly __data: FileReader;
	private __isReading = false;


	get isReading(): boolean {
		return this.__isReading;
	}


	constructor(
		private __readMethod: 'readAsText' | 'readAsDataURL' | 'readAsArrayBuffer' | 'readAsBinaryString'
	) {
		this.__data = new FileReader();

		this.__data.onloadstart = () => this.__isReading = true;
		this.__data.onloadend = () => this.__isReading = false;
	}


	async getContents(file: Blob): Promise<any> {

		return new Promise((returnData) => {

			this.__data.onload = () => {
				returnData(this.__data.result);
			};

			this.__data[this.__readMethod](file);
		});

	}

}
