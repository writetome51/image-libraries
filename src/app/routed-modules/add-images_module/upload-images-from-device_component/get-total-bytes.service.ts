import { getArrayOfProperty } from '@writetome51/get-array-of-property';
import { getSum } from '@writetome51/get-sum-average-product';


export class GetTotalBytesService {

	static go(files: FileList | File[]): number {
		// @ts-ignore
		let bytesOfEach = getArrayOfProperty('size', files);
		return getSum(bytesOfEach);
	}

}
