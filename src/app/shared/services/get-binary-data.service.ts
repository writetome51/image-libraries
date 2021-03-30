import { FileReaderService } from '@writetome51/file-reader-service';
// import { IDoThis } from '@interfaces/i-do-this'


export class GetBinaryDataService { // implements IDoThis

	static async go(file: Blob): Promise<string> {
		class BinaryFileReaderService extends FileReaderService {
			constructor() { super('readAsBinaryString');}
		}
		return (new BinaryFileReaderService()).getContents(file);
	}

}
