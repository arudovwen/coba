import { Icon } from "@iconify/react";

export default function AppIcon({
  icon = "mdi-light:home",
  iconClass= "",
}: {
  icon: string;
  iconClass?: string;
}) {
  return (
    <div>
      <Icon icon={icon} className={iconClass} />
    </div>
  );
}
