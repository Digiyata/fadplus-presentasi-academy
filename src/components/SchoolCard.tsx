
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface SchoolCardProps {
  name: string;
  image: string;
  memberCount: number;
  location: string;
  level: string;
  yearJoined: number;
}

const SchoolCard = ({ 
  name, 
  image, 
  memberCount, 
  location, 
  level,
  yearJoined
}: SchoolCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform hover:scale-105" 
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{name}</CardTitle>
          <Badge variant="secondary" className="bg-brand-blue text-white">
            {level}
          </Badge>
        </div>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-gray-700">
          <Users size={18} />
          <span>{memberCount} Member</span>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-gray-500">
        Bergabung sejak {yearJoined}
      </CardFooter>
    </Card>
  );
};

export default SchoolCard;
