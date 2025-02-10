import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { ProductItemsList } from "@/ui/organizms/ProductItemsList";
import { Product } from "@/ui/types";

const products: Product[] = [
	{
		id: "1",
		category: "Kategoria 1",
		name: "Produkt 1",
		price: 100,
		coverImage: {
			src: "./product1.png",
			alt: "Produkt 1",
		},
	},
	{
		id: "2",
		category: "Kategoria 2",
		name: "Produkt 2",
		price: 200,
		coverImage: {
			src: "./product2.webp",
			alt: "Produkt 2",
		},
	},
	{
		id: "3",
		category: "Kategoria 3",
		name: "Produkt 3",
		price: 300,
		coverImage: {
			src: "./product3.webp",
			alt: "Produkt 3",
		},
	},
	{
		id: "4",
		category: "Kategoria 4",
		name: "Produkt 4",
		price: 400,
		coverImage: {
			src: "./product4.webp",
			alt: "Produkt 4",
		},
	},
];

export default function Home() {
	return (
		<section className="max-w-d container mx-auto p-12">
			<ProductItemsList products={products} />
		</section>
	);
}
