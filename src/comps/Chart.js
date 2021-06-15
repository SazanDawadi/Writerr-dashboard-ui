import React from 'react'
import { ResponsiveLine } from '@nivo/line';



const Chart = () => {
    const data = [
        {
          "id": "followers gained",
          "color": "hsl(312, 70%, 50%)",
          "data": [
            {
              "x": "may",
              "y": 100
            },
            {
              "x": "june",
              "y": 191
            },
            {
              "x": "july",
              "y": 103
            },
            {
              "x": "aug",
              "y": 270
            },
            {
              "x": "sept",
              "y": 12
            },
            {
              "x": "oct",
              "y": 211
            }
          ]
        },
        {
          "id": "followers lost",
          "color": "hsl(183, 70%, 50%)",
          "data": [
            {
              "x": "may",
              "y": 100
            },
            {
              "x": "june",
              "y": 142
            },
            {
              "x": "july",
              "y": 88
            },
            {
              "x": "aug",
              "y": 43
            },
            {
              "x": "sept",
              "y": 141
            },
            {
              "x": "oct",
              "y": 166
            }
          ]
        }
      ]
    return (
        <div style = {{height:'300px',width:'47vw', margin:'auto'}}>
            <ResponsiveLine
                data={data}
                theme ={  { "background": "#1c1b4b",
                "textColor": "#ffffff",
                "fontSize": 13}}
                margin={{ top: 50, right: 10, bottom: 50, left: 11 }}
                curve = {'natural'}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 10,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 36,
                    legendPosition: 'middle',
                }}
                
                axisLeft = {false}
                enableGridX={false}
                enableGridY={false}
                colors={{ scheme: 'dark2' }}
                enablePoints={false}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={3}
                enableCrosshair = {false}
                pointBorderColor="white"
                pointLabelYOffset={-12}
                enableArea = {true}
                areaBlendMode = {'luminosity'}
                areaBaselineValue={200}
                areaOpacity={0.09}
                useMesh={true}
                legends={[
                    {
                        anchor: 'top',
                        direction: 'row',
                        justify: false,
                        translateX: 100,
                        translateY: -20,
                        itemsSpacing: 30,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .8)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
            
        </div>
    )
}

export default Chart
