export class LoadedImagesData {

	/******************
 	data is object whose keys are the _id's of each image, i.e:
 	{
 		'3a4fr53etrr469945ab': DBImage,
		'3c6fr53etrr449945ac': DBImage,
		'4c7fr53etrr449945ad': DBImage,
		'4d1fr53etrr449945aa': DBImage,
 	};
	 ******************/

	static data: object;


	static setDefault() {
		this.data = undefined;
	}
}
