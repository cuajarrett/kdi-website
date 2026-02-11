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

  const description = `${projectData.projectTitle} located at ${projectData.location}. Features a ${projectData.finish} finish from the ${projectData.collection} collection.`;

  return {
    title: projectData.projectTitle,
    description,
    openGraph: {
      title: projectData.projectTitle,
      description,
      url: `https://kassidinc.com/projects/${projectData.slug}`,
      siteName: "Kassi Distributors Inc.",
      images: [
        {
          url: projectData.coverImage,
          width: 1200,
          height: 630,
          alt: projectData.projectTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: projectData.projectTitle,
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
          __html: JSON.stringify(breadcrumbSchema),
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
        <table>
          <tr>
            <td className="p-2 font-bold">Brand:</td>
            <td className="p-2">
              <Link href={`/brands/${brand.slug}`}>
                <Image
                  src={brand.logo.src}
                  alt={brand.logo.alt}
                  width={100}
                  height={50}
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Collection:</td>
            <td className="p-2">{collection}</td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Finish:</td>
            <td className="p-2">{finish}</td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Location:</td>
            <td className="p-2">{location}</td>
          </tr>
        </table>
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
