import { DocumentList } from "./documentList";
import { Logo } from "./logo";

export class AppStore {
    name:string;
	description:string;
	createdby:string;
	industry:string[];
	tags:string[];
	marketingMaterial:DocumentList[];
	logo:Logo;
	inProduction:boolean;
	nullValue:string;
	version:number;
}