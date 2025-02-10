import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { Product } from "@/ui/types";

export const ProductItemsList = ({ products }: { products: Product[] }) => {
	return (
		<ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((product, index) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
