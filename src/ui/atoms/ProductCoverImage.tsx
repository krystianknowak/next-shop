export const ProductCoverImage = ({
	alt,
	src,
}: {
	alt: string;
	src: string;
}) => {
	return (
		<div className="aspect-square h-full w-full rounded-md bg-slate-50 p-4 transition-colors hover:bg-slate-100">
			<img
				src={src}
				alt={alt}
				width={320}
				height={320}
				className="h-full w-full rounded-sm object-cover object-center"
			/>
		</div>
	);
};
