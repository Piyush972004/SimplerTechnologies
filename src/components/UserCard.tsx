import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { Mail, Phone, User, Calendar } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  status: "active" | "inactive" | "pending";
  role: string;
  department: string;
  joinDate: string;
}

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-semibold text-lg">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {user.name}
              </h3>
              <p className="text-sm text-muted-foreground">{user.role}</p>
            </div>
          </div>
          <StatusBadge status={user.status} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="w-4 h-4 mr-2 text-primary" />
            <span className="truncate">{user.email}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="w-4 h-4 mr-2 text-primary" />
            <span>{user.mobile}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="w-4 h-4 mr-2 text-primary" />
            <span>{user.department}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span>{new Date(user.joinDate).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}