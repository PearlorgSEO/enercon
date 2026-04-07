// import Image from 'next/image';
// import type { Metadata } from 'next';
// import PageHeader from '@/components/PageHeader';
// import Link from 'next/link';
// import '../products.css';
// import { buildMetadata } from '@/lib/seo';

// const projects = [
//   { id: '1', src: '/images/projects/cp1.webp', name: 'LOGISTICS HUB WAREHOUSE' },
//   { id: '2', src: '/images/projects/cp2.webp', name: 'COMMERCIAL CENTER'},


// ];

// export const metadata: Metadata = buildMetadata({
//   title: 'Completed Waterproofing Projects | Enercon Group',
//   description:
//     'View completed Enercon projects across industrial and commercial sectors, including roof restoration, waterproofing, and coating applications.',
//   path: '/completed-projects',
//   keywords: ['waterproofing projects', 'roof coating case studies', 'enercon completed projects'],
// });

// export default function CompletedProjectsPage() {
//   // Group projects into rows of 2
//   const rows: typeof projects[] = [];
//   for (let i = 0; i < projects.length; i += 2) {
//     rows.push(projects.slice(i, i + 2));
//   }

//   return (
//     <div className="page-content">
//       <PageHeader
//         title="Our Blogs"
//       />

//       <div className='projectdiv' >
//         <div className="container">
//           <div className='projectdiv2'>
//             <h2 className="projects-page-heading">Our Blogs</h2>
//           <div className="projects-grid">
//         {rows.map((row, rowIndex) => (
//           <div key={rowIndex} className="project-row">
//             {row.map((project, index) => (
//               <div key={index} className="project-card">
//                 <div className="card-image">
//                   <Image
//                     src={project.src}
//                     alt={project.name}
//                     width={500}
//                     height={400}
//                     className="project-card-image"
//                   />
//                 </div>
//                 <div className="card-label">
//               <Link href={`/blog/${project.id}`} style={{ color: 'white' }}>
//                     {project.name}
//                   </Link>
//             </div>
//               </div>
//             ))}
//           </div>
//         ))}
//         </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import '../products.css';
import { buildMetadata } from '@/lib/seo';

// ✅ Define a type for each project
interface Project {
  id: string;
  src: string;
  name: string;
}

// ✅ Typed project array
const projects: Project[] = [
  { id: '1', src: '/images/projects/cp1.webp', name: 'LOGISTICS HUB WAREHOUSE' },
  { id: '2', src: '/images/projects/cp2.webp', name: 'COMMERCIAL CENTER' },
];

// ✅ Metadata with proper type
export const metadata: Metadata = buildMetadata({
  title: 'Completed Waterproofing Projects | Enercon Group',
  description:
    'View completed Enercon projects across industrial and commercial sectors, including roof restoration, waterproofing, and coating applications.',
  path: '/completed-projects',
  keywords: ['waterproofing projects', 'roof coating case studies', 'enercon completed projects'],
});

export default function CompletedProjectsPage(): JSX.Element {
  // ✅ Group projects into rows of 2
  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <div className="page-content">
      <PageHeader title="Our Blogs" />

      <div className="projectdiv">
        <div className="container">
          <div className="projectdiv2">
            <h2 className="projects-page-heading">Our Blogs</h2>
            <div className="projects-grid">
              {rows.map((row: Project[], rowIndex: number) => (
                <div key={rowIndex} className="project-row">
                  {row.map((project: Project, index: number) => (
                    <div key={index} className="project-card">
                      <div className="card-image">
                        <Image
                          src={project.src}
                          alt={project.name}
                          width={500}
                          height={400}
                          className="project-card-image"
                        />
                      </div>
                      <div className="card-label">
                        <Link href={`/blog/${project.id}`} style={{ color: 'white' }}>
                          {project.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}