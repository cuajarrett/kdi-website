import { Card } from "@/components/card";
import { title } from "@/components/primitives";
import { BRANDS } from "@/data";

export default function BrandsListPage() {
  return (
    <div>
      <h1 className={title()}>Our Partners</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BRANDS.map(({ name, logo, slug, description }, index) => (
          <Card
            key={index}
            link={`/brands/${slug}`}
            image={logo.src}
            title={name}
            excerpt={description}
            contain
          />
        ))}
      </div>
    </div>
  );
}
