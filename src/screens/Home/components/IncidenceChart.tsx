import ScatterChart from "../../../components/Chart/index"
import {Card} from "../../../components/Card";
import {BarChart} from "react-native-chart-kit";
import {ChartData} from "react-native-chart-kit/dist/HelperTypes";

export function IncidenceChart() {
    const chartData = [
        {
            color: 'red',
            unit: '%',
            values: [[0,0],[1,0.5877852522924731],[2,0.9510565162951535],[3,0.9510565162951536],[4,0.5877852522924732],[5,1.2246467991473532e-16],[6,-0.587785252292473],[7,-0.9510565162951535],[8,-0.9510565162951536],[9,-0.5877852522924734],[10,-2.4492935982947064e-16],[11,0.5877852522924729],[12,0.9510565162951535],[13,0.9510565162951536],[14,0.5877852522924734],[15,3.6739403974420594e-16],[16,-0.5877852522924728],[17,-0.9510565162951534],[18,-0.9510565162951538],[19,-0.5877852522924735]]
        },
        {
            color: 'green',
            unit: '%',
            values: [[0,1]]

        }
    ];

    const data: ChartData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
            }
        ],
    };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <Card>
            {/*<ScatterChart*/}
            {/*    backgroundColor='#ffffff'*/}
            {/*    data={chartData}*/}
            {/*    height={200}*/}
            {/*    horizontalLinesAt={[0,10,50]}*/}
            {/*    unitY=''*/}
            {/*/>*/}
            <BarChart
                data={data}
                width={200}
                height={100}
                chartConfig={chartConfig}
                yAxisLabel={'label'}
                yAxisSuffix={'sufix'}
            />
        </Card>
    )
}