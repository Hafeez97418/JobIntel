import * as React from "react";
import { Box, styled, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts";



interface PieCenterLabelProps {
    children: React.ReactNode;
}


const StyledText = styled('text')(({ theme }: { theme: Theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }: PieCenterLabelProps): React.ReactElement {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}

        </StyledText>
    );
}


interface DonutChartProps {
    overallFitScore: number; // value from 0 to 100
}

export default function DonutChart({ overallFitScore }: DonutChartProps) {
    const percentage = Math.min(Math.max(overallFitScore, 0), 100);

    const data = [
        { id: 0, value: percentage, label: "Fit" },
        { id: 1, value: 100 - percentage, label: "Remaining" }
    ];

    return (
        <Box
            sx={{
                width: 220,
                height: 220,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingX: 4
            }}
        >
            <PieChart
                width={220}
                height={220}
                sx={{ display: "flex", flexDirection: "column-reverse" }}
                series={[
                    {
                        innerRadius: 70,
                        outerRadius: 100,
                        data,
                        paddingAngle: 2,
                        cornerRadius: 4,
                        startAngle: -90,
                        endAngle: 270,
                        arcLabel: () => "",
                    }
                ]}
                id="chart"
            >
                <PieCenterLabel>
                            {percentage.toFixed(1)}%
                </PieCenterLabel>
            </PieChart>
        </Box>
    );
}
