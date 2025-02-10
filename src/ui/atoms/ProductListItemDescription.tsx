import { formatMoney } from "@/utils";

export const ProductListItemDescription = ({
	product: { name, category, price },
}: {
	product: { name: string; category: string; price: number };
}) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
			</div>
			<p className="text-sm text-gray-500">
				<span>Kategoria:</span>
				{category}
			</p>
			<p className="text-sm font-medium text-gray-500">
				<span>Cena:</span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
