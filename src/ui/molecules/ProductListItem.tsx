import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { Product } from "@/ui/types";

export const ProductListItem = ({ product }: { product: Product }) => {
	return (
		<li>
			<article>
				<ProductCoverImage
					src={product.coverImage.src}
					alt={product.coverImage.alt}
				/>
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
