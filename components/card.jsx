import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export const Card = ({ link, image, title, excerpt }) => {
  return (
    <Link
      href={link}
      className="border rounded-lg p-4 shadow flex flex-col transition hover:shadow-xl"
    >
      <Image src={image} alt={title} />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2 line-clamp-3">{excerpt}</p>
    </Link>
  );
};
