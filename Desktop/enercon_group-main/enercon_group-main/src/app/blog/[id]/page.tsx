import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';

// ✅ Define the type
interface Project {
  id: string;
  name: string;
  src: string;
  descripttion: string;
  metaTitle: string;
  metaDescription: string;
}

// ✅ Project data
const projects: Project[] = [
  {
    id: '1',
    name: 'LOGISTICS HUB WAREHOUSE',
    src: '/images/projects/cp1.webp',
    descripttion: 'Lorem ipsum 1 ...',
    metaTitle: 'Logistics Hub Warehouse Project | Enercon',
    metaDescription: 'Detailed case study of logistics hub waterproofing project.',
  },
  {
    id: '2',
    name: 'COMMERCIAL CENTER',
    src: '/images/projects/cp2.webp',
    descripttion: 'Lorem ipsum 2 ...',
    metaTitle: 'Commercial Center Project | Enercon',
    metaDescription: 'Detailed case study of commercial center waterproofing project.',
  },
];

// ✅ Metadata generator
export async function generateMetadata({
  params,
}: {
  params: Record<string, string>;
}): Promise<Metadata> {
  const blog = projects.find((item) => item.id === params.id);

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'This blog does not exist',
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  };
}

// ✅ Blog detail page
export default function BlogDetailPage({ params }: { params: Record<string, string> }) {
  const blog = projects.find((item) => item.id === params.id);

  if (!blog) return notFound();

  return (
    <div style={{ padding: '40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{blog.name}</h1>

      <Image
        src={blog.src}
        alt={blog.name}
        width={600}
        height={400}
        style={{ width: '100%', height: 'auto', marginTop: '20px' }}
      />

      <p style={{ marginTop: '20px' }}>{blog.descripttion}</p>
    </div>
  );
}