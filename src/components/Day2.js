import React from 'react';
import Chart from "react-apexcharts";
import Card from './Card';

const Day2Content = ({ darkMode }) => {

  const theme = darkMode ? 'dark' : 'light';

  return (
    <Card 
    content={{
      headline: "Türchen 2 – Motivation finden",
      icon: "earth",
      subtitle: "Vegan für die Umwelt"
    }}
    text={<>
      <b>Vegetarier und Veganer weisen in allen Kategorien, nicht nur bei Lebensmitteln, geringere Emissionen 
      auf.</b> Menschen mit fleischlosen Diäten sind auch in allen anderen Lebensbereichen sparsamer. 
      Ein möglicher Grund: Vegetarier und Veganer neigen dazu, umweltbewusster zu sein.
      <br/>
      Im Durchschnitt haben die Teilnehmer der Studie, die sich als Veganer bezeichneten, Treibhausgasemissionen, die etwa der Hälfte derjenigen entsprechen, die angaben, viel Fleisch zu essen.
      <br/>
      Wenn du mehr erfahren möchtest, kannst du dir die vollständige Studie <a href="https://bit.ly/3f5E0RG" target="_blank" rel="noreferrer">hier</a> genauer ansehen.
    </>}
    chart={ <div className="pt-4">
    <Chart
      type='bar'
      height={500}
      series={[{
        name: 'Zuhause',
        data: [0.48, 0.55, 0.44, 0.35]
      }, {
        name: 'Lebensstil',
        data: [0.79, 0.78, 0.67, 0.55]
      }, {
        name: 'Transport',
        data: [2.94, 2.40, 2.01, 1.70]
      }, {
        name: 'Ernährung',
        data: [3.01, 1.76, 1.35, 0.97]
      }]}
      options={{
          chart: {
            type: 'bar',
            stacked: true
          },
          bar: {
            horizontal: false,
            dataLabels: {
              total: {
                enabled: true,
                offsetX: 0,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        stroke: {
          width: 1,
          ...!darkMode && { colors: ['#fff'] }
        },
        title: {
          text: 'CO2 Fußabdruck pro Jahr'
        },
        xaxis: {
          categories: ['Viel Fleisch', 'Wenig Fleisch', 'Vegetarisch', 'Vegan'],
          labels: {
            formatter: function (val) {
              return val
            },
            color: '#fff'
          }
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "t"
            }
          }
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        },
        theme: {
          mode: theme, 
          palette: 'palette7', 
          monochrome: {
              enabled: false,
              color: '#255aee',
              shadeTo: theme, 
              shadeIntensity: 0.65
          },
      }
      }}
    />
  </div>}
  />
  );
}

export default Day2Content;