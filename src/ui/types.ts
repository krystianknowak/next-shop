export interface Product {
	id: string;
	name: string;
	price: number;
	category: string;
	coverImage: {
		src: string;
		alt: string;
	};
}
