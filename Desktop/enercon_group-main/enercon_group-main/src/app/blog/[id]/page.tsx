// import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';


// // Same data (better: isko alag file me rakhna best hai)
// const projects = [
//   { id: '1',
//     name: 'LOGISTICS HUB WAREHOUSE', 
//     src: '/images/projects/cp1.webp', 
//     descripttion: 'Lorem ipsum 1 Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1 Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1' , 
//     metaTitle: 'Logistics Hub Warehouse Project | Enercon',
//     metaDescription: 'Detailed case study of logistics hub waterproofing project.'
//   },

//   { id: '2',
//    name: 'COMMERCIAL CENTER', 
//    src: '/images/projects/cp2.webp', 
//    descripttion: 'Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2', 
//    metaTitle: 'Logistics Hub Warehouse Project | Enercon',
//    metaDescription: 'Detailed case study of logistics hub waterproofing project.' 
//  },

 


// ];

// export async function generateMetadata({ params }): Promise<Metadata> {
//   const blog = projects.find((item) => item.id === params.id);

//   if (!blog) {
//     return {
//       title: 'Blog Not Found',
//       description: 'This blog does not exist'
//     };
//   }

//   return {
//     title: blog.metaTitle,
//     description: blog.metaDescription,
//   };
// }


// export default function BlogDetailPage({ params }: { params: { id: string } }) {
//   const blog = projects.find((item) => item.id === params.id);

//   // Agar blog na mile to 404
//   if (!blog) return notFound();

//   return (
//     <div style={{ padding: '40px', textAlign: 'center' }}>
//       <h1>{blog.name}</h1>

//       <img
//         src={blog.src}
//         alt={blog.name}
//         style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}
//       />

//       <p style={{ marginTop: '20px' }}>
//         {blog.descripttion}
//       </p>
//     </div>
//   );
// }


import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

interface Project {
  id: string;
  name: string;
  src: string;
  descripttion: string;
  metaTitle: string;
  metaDescription: string;
}

interface BlogPageProps {
  params: { id: string };
}

const projects: Project[] = [
  {
    id: '1',
    name: 'LOGISTICS HUB WAREHOUSE',
    src: '/images/projects/cp1.webp',
    descripttion:
      'Lorem ipsum 1 Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1 Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1Lorem ipsum 1',
    metaTitle: 'Logistics Hub Warehouse Project | Enercon',
    metaDescription: 'Detailed case study of logistics hub waterproofing project.',
  },
  {
    id: '2',
    name: 'COMMERCIAL CENTER',
    src: '/images/projects/cp2.webp',
    descripttion:
      'Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2Lorem ipsum 2',
    metaTitle: 'Commercial Center Project | Enercon',
    metaDescription: 'Detailed case study of commercial center waterproofing project.',
  },
];

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
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

export default function BlogDetailPage({ params }: BlogPageProps) {
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