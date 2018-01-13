import { Component, OnInit } from '@angular/core';

import * as Plotly from 'plotly.js/dist/plotly.js';
import { ScatterData } from 'plotly.js/dist/plotly.js';

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
    type: 'pie',
    domain: {
      x: [0, .33]
    }
  } as ScatterData ];

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
    type: 'pie',
    domain: {
      x: [0, .33]
    }
  } as ScatterData ];

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
    type: 'pie',
    domain: {
      x: [0, .33]
    }
  } as ScatterData ];

  returnLayout(dataSet): {}{
    return {
      showlegend: false,
      font: {
        family: 'Roboto',
        size: 14,
        color: '#433333'
      },
      annotations: [
        {
          text: dataSet.name,
          showarrow: false,
          x: .14,
          y:.3
        }
      ],
      images: [
        {
          x: .19,
          y: .4,
          sizex: 0.2,
          sizey: 0.2,
          source: `/assets/images/${dataSet.name}.png`,
          xanchor: "right",
          xref: "paper",
          yanchor: "bottom",
          yref: "paper"
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
