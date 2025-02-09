import { Card } from "@/components/ui/card";

interface StatsCardProps {
  icon: string;
  title: string;
  value: string;
}

export function StatsCard({ icon, title, value }: StatsCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm">
      <div className="w-16 h-16 mb-4">
        <img src={icon} alt="" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </Card>
  );
}