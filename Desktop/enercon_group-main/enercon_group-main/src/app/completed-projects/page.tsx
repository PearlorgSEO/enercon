import Image from 'next/image';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import '../products.css';
import { buildMetadata } from '@/lib/seo';

const projects = [
  { src: '/images/projects/cp1.webp', name: 'LOGISTICS HUB WAREHOUSE', location: 'TAMPA BAY – USA' },
  { src: '/images/projects/cp2.webp', name: 'COMMERCIAL CENTER', location: 'MIAMI – USA' },
  { src: '/images/projects/cp3.webp', name: 'COMMUNITY SCHOOL', location: 'GEORGIA – USA' },
  { src: '/images/projects/cp4.webp', name: 'DATA CENTER ROOF', location: 'SAN JUAN – PUERTO RICO' },
  { src: '/images/projects/cp5.webp', name: 'ROOF RESTORATION', location: 'JAMAICA' },
  { src: '/images/projects/cp6.webp', name: 'PALM ISLAND', location: 'DUBAI – UAE' },
  { src: '/images/projects/cp7.webp', name: 'UAE SPACE AGENCY', location: 'ABU DHABI – UAE' },
  { src: '/images/projects/cp8.webp', name: 'ARBOR SCHOOL', location: 'DUBAI – UAE' },
  { src: '/images/projects/cp9.webp', name: 'ADNOC Gas Station', location: 'ABU DHABI – UAE' },
  { src: '/images/projects/cp10.webp', name: 'METAL SHEDS', location: 'DUBAI – UAE' },
];

export const metadata: Metadata = buildMetadata({
  title: 'Completed Waterproofing Projects | Enercon Group',
  description:
    'View completed Enercon projects across industrial and commercial sectors, including roof restoration, waterproofing, and coating applications.',
  path: '/completed-projects',
  keywords: ['waterproofing projects', 'roof coating case studies', 'enercon completed projects'],
});

export default function CompletedProjectsPage() {
  // Group projects into rows of 2
  const rows: typeof projects[] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <div className="page-content">
      <PageHeader
        title="Completed Projects"
      />

      <div className='projectdiv' >
        <div className="container">
          <div className='projectdiv2'>
            <h2 className="projects-page-heading">Completed Projects</h2>
          <div className="projects-grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="project-row">
            {row.map((project, index) => (
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
                  {project.name}<br />{project.location}
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
