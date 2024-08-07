import { AnalyticsItem } from "./AnalyticsItem";

export const Analytics = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <AnalyticsItem title="Total Interactions" value="37260" />
      <AnalyticsItem title="Total Interactions" value="37260" />
      <AnalyticsItem
        title="Resolution Rate"
        value="95%"
        className="row-span-2"
      />
      <AnalyticsItem title="Fallback Rate" value="5%" className="row-span-2" />
      <AnalyticsItem title="Total Interactions" value="37260" />
      <AnalyticsItem title="Total Interactions" value="37260" />
    </div>
  );
};
