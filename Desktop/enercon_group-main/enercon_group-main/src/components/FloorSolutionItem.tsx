import Image from 'next/image';

export interface FloorSolutionItemProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  features: string[];
}

export default function FloorSolutionItem({
  title,
  imageSrc,
  imageAlt,
  description,
  features,
}: FloorSolutionItemProps) {
  return (
    <div className="fc-solution-item">
      <div className="fc-solution-image">
        <Image src={imageSrc} alt={imageAlt} width={400} height={400} />
      </div>
      <div className="fc-solution-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>Key Features</h4>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
