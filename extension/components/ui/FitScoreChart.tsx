import DonutChart from "./DonutChart";

export default function FitScoreChart({ score }: { score: number }) {
  return <DonutChart overallFitScore={score} />;
}
