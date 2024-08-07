import { ComponentPropsWithoutRef } from "react";

type AnalyticsItemProps = {
  title: string;
  value: string;
};

export const AnalyticsItem: React.FC<
  AnalyticsItemProps & ComponentPropsWithoutRef<"div">
> = ({ title, value, className }) => {
  return (
    <div className={`flex flex-col p-4 bg-white rounded-xl ${className}`}>
      <span>{title}</span>
      <span className="font-bold text-xl">{value}</span>
    </div>
  );
};
