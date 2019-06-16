export async function getDataURLs(files: FileList): Promise<any[]> {
	let dataURLs = [];

	return new Promise((resolve) => {
		[].forEach.call(files,
			(file, index, files) => {

				const reader = new FileReader();

				reader.onload = () => {
					dataURLs.push(reader.result);

					if (dataURLs.length === files.length) { // If finished reading each file...
						resolve(dataURLs);
					}
				};

				reader.readAsDataURL(file);
			}
		);
	});
}
