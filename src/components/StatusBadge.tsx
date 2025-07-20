import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "inactive" | "pending";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variants = {
    active: "bg-success/10 text-success border-success/20",
    inactive: "bg-muted text-muted-foreground border-border",
    pending: "bg-warning/10 text-warning border-warning/20"
  };

  const labels = {
    active: "Active",
    inactive: "Inactive", 
    pending: "Pending"
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
      variants[status],
      className
    )}>
      <span className={cn(
        "w-1.5 h-1.5 rounded-full mr-1.5",
        status === "active" && "bg-success",
        status === "inactive" && "bg-muted-foreground",
        status === "pending" && "bg-warning"
      )} />
      {labels[status]}
    </span>
  );
}