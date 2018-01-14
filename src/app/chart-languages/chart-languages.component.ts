import { Component, OnInit } from '@angular/core';

import * as Plotly from 'plotly.js/dist/plotly.js';

@Component({
  selector: 'app-chart-languages',
  templateUrl: './chart-languages.component.html',
  styleUrls: ['./chart-languages.component.scss']
})
export class ChartLanguagesComponent implements OnInit {

  dataEnglish = [
  {
    values: [100],
    rotation: 180,
    marker: {
      colors: ['#433333']
    },
    name: 'English',
    textinfo: 'none',
    hoverinfo: 'none',
    hole: .7,
    type: 'pie'
  }];

  dataFrench = [
  {
    values: [100],
    rotation: 180,
    marker: {
      colors: ['#433333']
    },
    name: 'French',
    textinfo: 'none',
    hoverinfo: 'none',
    hole: .7,
    type: 'pie'
  }];

  dataSpanish = [
  {
    values: [50,50],
    rotation: 180,
    marker: {
      colors: ['#433333','#906c6c']
    },
    name: 'Spanish',
    textinfo: 'none',
    hoverinfo: 'none',
    hole: .7,
    type: 'pie'
  }];

  returnLayout(dataSet): {}{
    return {
      margin: { t: 0, l: 0, r: 0, b: 0 },
      showlegend: false,
      font: {
        family: 'Roboto',
        size: 14,
        color: '#433333'
      },
      annotations: [
        {
          text: dataSet.name,
          showarrow: false
        }
      ],
      images: [
        {
          sizex: 0.2,
          sizey: 0.2,
          source: `/assets/images/${dataSet.name}.png`,
          xanchor: 'center',
          yanchor: 'middle',
          x:.5,
          y:.5
        }
      ]
    }
  }


  constructor() { }

  ngOnInit() {
    Plotly.newPlot('graph-english', this.dataEnglish, this.returnLayout(this.dataEnglish[0]));
    Plotly.newPlot('graph-french', this.dataFrench, this.returnLayout(this.dataFrench[0]));
    Plotly.newPlot('graph-spanish', this.dataSpanish, this.returnLayout(this.dataSpanish[0]));
  }

}
