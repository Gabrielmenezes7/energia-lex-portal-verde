
import { Building, Factory, Home, Coffee, School, User } from "lucide-react";
import { Card } from "./ui/card";

interface ClientTypeProps {
  type: "residencia" | "empresa" | "escola" | "restaurante" | "fabrica" | "autonomo";
  title: string;
}

const ClientType = ({ type, title }: ClientTypeProps) => {
  const icons = {
    residencia: Home,
    empresa: Building,
    escola: School,
    restaurante: Coffee,
    fabrica: Factory,
    autonomo: User,
  };

  const Icon = icons[type];

  return (
    <Card className="p-6 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer">
      <Icon className="h-12 w-12 mb-4 text-secondary" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </Card>
  );
};

export default ClientType;
