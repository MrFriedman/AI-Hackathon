import Link from 'next/link';

interface DashboardCardProps {
  title: string;
  description: string;
  link: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, link }) => (
  <Link href={link} className="block p-6 bg-gray-200 rounded-xl shadow-md hover:bg-gray-300 transition">
    <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </Link>
);

export default DashboardCard;
