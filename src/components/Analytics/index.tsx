import { AnalyticsItem } from "./AnalyticsItem";
import { AnalyticsItemChart } from "./AnalyticsItemChart";

export const Analytics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <AnalyticsItem title="Total Interactions" value="37260" />
      <AnalyticsItem title="Unique Users" value="50000" />
      <AnalyticsItemChart
        title="Resolution Rate"
        value="95%"
        percentage={95}
        className="row-span-2"
      />
      <AnalyticsItemChart
        title="Fallback Rate"
        value="5%"
        percentage={5}
        className="row-span-2"
      />
      <AnalyticsItem title="Average Response Time" value="2s" />
      <AnalyticsItem title="Total Messages Exchanged" value="9000" />
    </div>
  );
};
