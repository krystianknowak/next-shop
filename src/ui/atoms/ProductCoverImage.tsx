export const ProductCoverImage = ({
	alt,
	src,
}: {
	alt: string;
	src: string;
}) => {
	return (
		<div className="relative aspect-square h-full w-full bg-slate-50 transition-colors hover:bg-slate-100">
			<img
				src={src}
				alt={alt}
				width={320}
				height={320}
				className="inset-0 h-full w-full object-cover p-4"
			/>
		</div>
	);
};
