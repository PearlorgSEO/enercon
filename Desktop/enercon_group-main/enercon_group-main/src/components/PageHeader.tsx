// header only needs title and optional subtitle
export type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
        {/* breadcrumbs intentionally omitted */}
      </div>
    </div>
  );
}
