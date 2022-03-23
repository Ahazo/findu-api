export default interface ICreateBundleDTO {
	title: string;
	description: string;
	value: number;
	deadline: number;
	bundleRelation: {
		freelancer_id: number;
		percentage: number;
	}[];
}
