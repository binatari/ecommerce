import Image from "next/image";
import Link from "next/link";
import cc from "classcat";

function Product({ media, name, permalink, price, className }) {
  const imageClass = cc([
    "relative overflow-hidden w-full transition-all min-h-[90%]",
    className,
  ]);

  return (
    <Link href={`/products/${permalink}`}>
      <a className="group relative">
        {media?.source && (
          <div className="relative overflow-hidden w-full transition-all min-h-[90%] h-[90%]">
            <Image
              src={media.source}
              alt={Product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="flex justify-between py-2 md:py-3 space-x-1 text-white">
          <span className="text-sm md:text-base lg:text-lg">{name}</span>
          <span className="text-sm md:text-base lg:text-lg">
            {price.formatted_with_symbol}
          </span>
        </div>
      </a>
    </Link>
  );
}

export default Product;
