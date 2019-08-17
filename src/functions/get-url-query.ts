/************
 Returns `keyValuePairs` as a GET query string, i.e.,

 getURLQuery({name:'joe schmoe', email:'joeschmoe@gmail.com'});
 // -->   '?name=joe%20schmoe&email=joeschmoe@gmail.com'
 **************/

export function getURLQuery(keyValuePairs:Object): string {
	if (Object.keys(keyValuePairs).length === 0) return '';
	let getQuery = '?';

	for (let key in keyValuePairs) getQuery += (key + '=' + keyValuePairs[key] + '&');

	getQuery = getQuery.slice(0, -1); // removes the trailing '&' .
	return encodeURI(getQuery);
}
