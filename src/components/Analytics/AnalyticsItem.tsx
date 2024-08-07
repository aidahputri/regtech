import { ComponentPropsWithoutRef } from "react";

type AnalyticsItemProps = {
  title: string;
  value: string;
};

export const AnalyticsItem: React.FC<
  AnalyticsItemProps & ComponentPropsWithoutRef<"div">
> = ({ title, value, className }) => {
  return (
    <div className={`flex flex-col p-4 gap-4 bg-white rounded-xl shadow ${className}`}>
      <span className="text-sm lg:text-base">{title}</span>
      <span className="font-bold text-xl lg:text-2xl">{value}</span>
    </div>
  );
};
