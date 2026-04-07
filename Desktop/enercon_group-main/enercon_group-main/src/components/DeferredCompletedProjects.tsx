import dynamic from 'next/dynamic';

interface Slide {
  src: string;
  caption: string;
}

interface DeferredCompletedProjectsProps {
  slides: Slide[];
  heading?: string;
}

const CompletedProjects = dynamic(() => import('./CompletedProjects'), {
  loading: () => <div className="cp-loading">Loading project gallery...</div>,
});

export default function DeferredCompletedProjects({ slides, heading }: DeferredCompletedProjectsProps) {
  return <CompletedProjects slides={slides} heading={heading} />;
}