import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

import Gallery from "@/components/gallery";
import { title } from "@/components/primitives";
import { PROJECTS } from "@/data";

// Static paths generation
export async function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({
    project: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { project } = await params;
  const projectData = PROJECTS.find((p) => p.slug === project);
  if (!projectData) {
    return { title: "Project Not Found" };
  }

  const description = `${projectData.projectTitle} at ${projectData.location}. Featuring ${projectData.finish} finish from the ${projectData.collection} collection by ${projectData.brand.name}.`;

  return {
    title: `${projectData.projectTitle} — ${projectData.brand.name} Kitchen Project`,
    description,
    keywords: [
      projectData.brand.name,
      projectData.collection,
      "kitchen project Philippines",
      "kitchen installation",
      projectData.location,
    ],
    openGraph: {
      title: `${projectData.projectTitle} — ${projectData.brand.name} Kitchen Project`,
      description,
      url: `https://kassidinc.com/projects/${projectData.slug}`,
      siteName: "Kassi Distributors Inc.",
      locale: "en_PH",
      images: [
        {
          url: projectData.coverImage,
          width: 1200,
          height: 630,
          alt: `${projectData.projectTitle} — kitchen project by Kassi Distributors Inc.`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectData.projectTitle} — ${projectData.brand.name} Kitchen Project`,
      description,
      images: [projectData.coverImage],
    },
    alternates: {
      canonical: `https://kassidinc.com/projects/${projectData.slug}`,
    },
  };
}

// Page Component
export default async function ProjectItemPage({ params }) {
  const { project } = await params;

  // Find the brand data by slug
  const projectData = PROJECTS.find((p) => p.slug === project);

  if (!projectData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] px-4">
        <div className="max-w-md text-center bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The project you're looking for doesn't exist or might have
            been removed. Don't worry, there's more to explore!
          </p>
          <Button className="w-full" color="primary" as={Link} href="/projects">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const {
    coverImage,
    projectTitle,
    brand,
    collection,
    finish,
    location,
    gallery,
  } = projectData;

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: projectTitle,
    description: `${projectTitle} — ${collection} collection with ${finish} finish, located at ${location}.`,
    url: `https://kassidinc.com/projects/${projectData.slug}`,
    image: [coverImage, ...gallery].map((src) => `https://kassidinc.com${src}`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://kassidinc.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://kassidinc.com/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: projectTitle,
        item: `https://kassidinc.com/projects/${projectData.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([imageGallerySchema, breadcrumbSchema]),
        }}
      />
      <Image
        src={coverImage}
        alt={projectTitle}
        width={1280}
        height={600}
        className="object-cover w-screen h-[40vh] sm:h-[80vh]"
      />
      <div className="mx-auto max-w-7xl py-8">
        <h1 className={title()}>{projectTitle}</h1>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
          <dt className="p-2 font-bold">Brand:</dt>
          <dd className="p-2">
            <Link href={`/brands/${brand.slug}`}>
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={100}
                height={50}
              />
            </Link>
          </dd>
          <dt className="p-2 font-bold">Collection:</dt>
          <dd className="p-2">{collection}</dd>
          <dt className="p-2 font-bold">Finish:</dt>
          <dd className="p-2">{finish}</dd>
          <dt className="p-2 font-bold">Location:</dt>
          <dd className="p-2">{location}</dd>
        </dl>
        {/* Gallery Section */}
        {gallery.length > 0 && (
          <section className="mt-10 bg-white">
            <div className="container mx-auto">
              <h2 className={title()}>Gallery</h2>
              <Gallery
                gallery={gallery.map((src, index) => ({
                  src,
                  alt: `${projectTitle} - Image ${index}`,
                }))}
              />
            </div>
          </section>
        )}
      </div>
    </>
  );
}
