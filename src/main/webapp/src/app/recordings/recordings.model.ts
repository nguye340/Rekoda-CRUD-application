export class Recording {
	
	public base64string: any;
	public date: any;
	public id?: string;


	constructor(base64string: any, date: any, id?: string) {
	this.base64string = base64string;
	this.date = date;
	this.id = id;
}
}

