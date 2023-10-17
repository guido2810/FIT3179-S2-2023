// Vega-Lite specifications ( spec 1-5 )

const spec1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Global Primary Forest Loss (2002-2022)",
      "fontSize": 20,
      "font": "Helvetica Neue",
      "anchor": "middle",
      "color": "black",
      "align": "center",
      "dy": -15
    },
    "width": 950,
    "height": 450,
    "layer": [
      {
        "data": {
          "url": "https://raw.githubusercontent.com/guido2810/FIT3179-S2-2023/main/TopoJsons/Ocean.json",
          "format": {
            "type": "topojson",
            "feature": "ocean"
          }
        },
        "mark": {
          "type": "geoshape",
          "fill": "lightblue"
        }
      },
      {
        "data": {
          "url": "https://raw.githubusercontent.com/guido2810/FIT3179-S2-2023/main/TopoJsons/Land.json",
          "format": {
            "type": "topojson",
            "feature": "land"
          }
        },
        "mark": {
          "type": "geoshape",
          "fill": "#8f7c0dce"
        }
      },
      {
        "data": {
          "url": "https://raw.githubusercontent.com/guido2810/FIT3179-S2-2023/main/TopoJsons/Countries.json",
          "format": {
            "type": "topojson",
            "feature": "Map"
          }
        },
        "transform": [
          {
            "lookup": "properties.NAME_EN",
            "from": {
              "data": {
                "url": "https://raw.githubusercontent.com/guido2810/FIT3179-S2-2023/main/TopoJsons/harmonized_forest_loss_corrected.csv",
                "format": {
                  "type": "csv"
                }
              },
              "key": "country",
              "fields": ["country", "primary_forest_loss_ha"]
            }
          }
        ],
        "mark": {
          "type": "geoshape",
          "stroke": "orange",
          "strokeWidth": 1.0
        },
        "encoding": {
          "color": {
            "field": "primary_forest_loss_ha",
            "type": "quantitative",
            "scale": {
              "domain": [0, 8000000],
              "scheme": "darkgreen",
              "reverse":false
            },
            "legend": {
              "title": "Primary Forest Loss (ha)",
              "titleFontSize": 16,
              "labelFontSize": 14,
              "titleFont": "Helvetica Neue",
              "labelFont": "Helvetica Neue",
              "gradientLength": 200
            }
          },
          "tooltip": [
            {
              "field": "properties.NAME_EN",
              "type": "nominal",
              "title": "Country"
            },
            {
              "field": "primary_forest_loss_ha",
              "type": "quantitative",
              "title": "Forest Loss (ha)",
              "format": ".3s"
            }
          ]
        }
      }
    ],
    "config": {
      "background": "#f5f5f5",
      "view": {"stroke": "transparent"},
      "axis": {"grid": false},
      "legend": {
        "labelLimit": 0,
        "symbolLimit": 0
      }
    }
  
}

const spec2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Global Tree Cover Loss by Dominant Driver (2001-2022)",
    "fontSize": 20,
    "font": "Helvetica Neue",
    "anchor": "start",
    "color": "black",
    "dy": -15
  },
  "data": {"url": "https://raw.githubusercontent.com/guido2810/FIT3179-S2-2023/main/data_folder/tree_cover_loss_by_dominant_driver_adjusted.csv"},
  "width": 850,
  "height": 400,
  "mark": {
    "type": "bar",
    "cornerRadiusEnd": 2, 
    "cursor": "pointer"
  },
  "encoding": {
    "y": {
      "field": "Year",
      "type": "ordinal",
      "axis": {
        "title": "Year",
        "titleFontSize": 16,
        "labelFontSize": 14,
        "titleFont": "Helvetica Neue",
        "labelFont": "Helvetica Neue"
      }
    },
    "x": {
      "aggregate": "sum",
      "field": "Tree Cover Loss (Mha)",
      "type": "quantitative",
      "axis": {
        "title": "Tree Cover Loss (Million ha)",
        "titleFontSize": 16,
        "labelFontSize": 14,
        "titleFont": "Helvetica Neue",
        "labelFont": "Helvetica Neue"
      }
    },
    "color": {
      "field": "Dominant Driver",
      "type": "nominal",
      "legend": {
        "title": "Dominant Drivers",
        "titleFontSize": 16,
        "labelFontSize": 14,
        "titleFont": "Helvetica Neue",
        "labelFont": "Helvetica Neue"
      },
      "scale": {"scheme": "viridis"}
    },
    "tooltip": [
      {"field": "Year", "type": "ordinal"},
      {"field": "Dominant Driver", "type": "nominal"},
      {"field": "Tree Cover Loss (Mha)", "type": "quantitative", "aggregate": "sum", "format": ".2f"}
    ]
  },
  "transform": [
    {
      "fold": [
        "Commodity driven deforestation",
        "Forestry",
        "Shifting agriculture",
        "Unknown causes",
        "Urbanization",
        "Wildfires"
      ],
      "as": ["Dominant Driver", "Tree Cover Loss (Mha)"]
    }
  ],
  "config": {
    "background": "#f5f5f5",
    "view": {"stroke": "transparent"},
    "axis": {"grid": false},
    "legend": {
      "labelLimit": 0,
      "symbolLimit": 0
    }
  }
}

const spec3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Global Annual Tree Cover Loss from Fires (2001-2022)",
  "title": {
    "text": "Global Annual Tree Cover Loss from Fires",
    "fontSize": 20,
    "anchor": "start",
    "color": "black",
    "align": "left",
    "dy": -15 
  },
  "data": {
    "url": "https://raw.githubusercontent.com/guido2810/FIT3179-S2-2023/main/data_folder/annual_tree_cover_loss_from_fires.csv"
  },
  "layer": [
    {
      "mark": {
        "type": "area",
        "line": {"color": "#800000"},
        "color": {
          "x1": 1,
          "y1": 1,
          "x2": 1,
          "y2": 0,
          "gradient": "linear",
          "stops": [
            {"offset": 0, "color": "white"},
            {"offset": 1, "color": "#ff9999"}
          ]
        }
      },
      "encoding": {
        "x": {
          "field": "year",
          "type": "temporal",
          "title": "Year",
          "axis": {"format": "%Y", "labelAngle": -45, "titleFontSize": 16, "labelFontSize": 14}
        },
        "y": {
          "field": "loss_from_fires_ha",
          "type": "quantitative",
          "title": "Tree Cover Loss (hectares)",
          "axis": {"titleFontSize": 16, "labelFontSize": 14}
        }
      }
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "year", "type": "temporal"},
        "y": {"field": "loss_from_fires_ha", "type": "quantitative"},
        "color": {"value": "#959595"},
        "size": {"value": 3}
      },
      "transform": [
        {"loess": "loss_from_fires_ha", "on": "year", "bandwidth": 0.35}
      ]
    },
    {
      "mark": {
        "type": "point",
        "filled": true,
        "fill": "#800000",
        "stroke": "black"
      },
      "encoding": {
        "x": {"field": "year", "type": "temporal"},
        "y": {"field": "loss_from_fires_ha", "type": "quantitative"},
        "size": {"value": 100},
        "tooltip": [
          {"field": "year", "type": "temporal", "title": "Year", "format": "%Y"},
          {"field": "loss_from_fires_ha", "type": "quantitative", "title": "Loss (hectares)", "format": ".2s"}
        ]
      }
    },
    {
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "middle",
        "dx": 7
      },
      "encoding": {
        "x": {"field": "year", "type": "temporal"},
        "y": {"field": "loss_from_fires_ha", "type": "quantitative"},
        "text": {"field": "loss_from_fires_ha", "type": "quantitative", "format": ".2s"},
        "opacity": {"condition": {"test": "datum['year'] % 5 == 0", "value": 1}, "value": 0}
      }
    }
  ],
  "height": 400,
  "width": 1000,
  "config": {
    "background": "#f5f5f5",
    "title": {
      "font": "Helvetica Neue",
      "fontSize": 20,
      "fontStyle": "normal",
      "anchor": "start",
      "color": "black",
      "align": "left",
      "dy": 20  
    },
    "axis": {
      "titleFont": "Helvetica Neue",
      "labelFont": "Helvetica Neue",
      "titleFontSize": 16,
      "labelFontSize": 14,
      "titlePadding": 10  
    },
    "legend": {
      "labelFontSize": 14,
      "titleFontSize": 16
    },
    "view": {"stroke": "transparent"} 
  }    
}

const spec4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Global Tree Cover by Type",
  "title": {
    "text": "Global Tree Cover by Type (2000)",
    "fontSize": 20,
    "font": "Helvetica Neue",
    "anchor": "start",
    "color": "black"
  },
  "width": 750,
  "height": 400,
  "data": {
    "values": [
      {"type": "Natural Forest", "percentage": 29, "area": "3.86 Gha", "description": "Natural forests contribute to biodiversity, offering a wide range of habitats."},
      {"type": "Plantations", "percentage": 1, "area": "138 Mha", "description": "Plantations are typically used for specific purposes like timber and agriculture."},
      {"type": "Other Land Cover", "percentage": 69.9, "area": "9.28 Gha", "description": "This includes urban areas, croplands, barren land, etc."}
    ]
  },
  "layer": [
    {
      "mark": {"type": "arc", "innerRadius": 100, "outerRadius": 160, "stroke": "#fff"},
      "encoding": {
        "theta": {"field": "percentage", "type": "quantitative", "stack": true},
        "color": {
          "field": "type", "type": "nominal",
          "scale": {
            "domain": ["Natural Forest", "Plantations", "Other Land Cover"],
            "range": ["#1f77b4", "#ff7f0e", "#2ca02c"]
          },
          "legend": {
            "title": "Tree Cover Type",
            "titleFontSize": 16,
            "labelFontSize": 14,
            "titleFont": "Helvetica Neue",
            "labelFont": "Helvetica Neue",
            "orient": "top-right"
          }
        }
      }
    },
    {
      "mark": {
        "type": "text",
        "radius": 120,
        "align": "center",
        "baseline": "middle",
        "fontSize": 14,
        "fontWeight": "bold"
      },
      "encoding": {
        "text": {"field": "percentage", "type": "quantitative", "format": ".1f"}, 
        "theta": {"field": "percentage", "type": "quantitative", "stack": true}
      }
    },
    {
      "mark": {
        "type": "text",
        "radius": 80,
        "align": "center",
        "baseline": "middle",
        "fontSize": 12,
        "fontWeight": "normal"
      },
      "encoding": {
        "text": {"field": "area", "type": "nominal"},
        "theta": {"field": "percentage", "type": "quantitative", "stack": true}
      }
    }
  ],
  "encoding": {
    "tooltip": [
      {"field": "type", "type": "nominal", "title": "Tree Cover Type"},
      {"field": "percentage", "type": "quantitative", "title": "Percentage", "format": ".1%"},
      {"field": "area", "type": "nominal", "title": "Area"},
      {"field": "description", "type": "nominal", "title": "Description"}
    ]
  },
  "config": {
    "background": "#f5f5f5",
    "view": {"stroke": "transparent"},
    "arc": {"stroke": "#d22a2a"}
  }     
}

const spec5 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Global Tree Cover by Country ( Ranked & Compared )",
      "fontSize": 20,
      "font": "Helvetica Neue",
      "anchor": "start",
      "color": "black",
      "dy": -12  
    },
    "data": {
      "url": "https://raw.githubusercontent.com/guido2810/FIT3179-S2-2023/main/data_folder/tree_cover_top_10_countries.csv"
    },
    "vconcat": [
      {
        "width": 850,
        "height": 400,
        "mark": "point",
        "encoding": {
          "x": {
            "field": "Country",
            "type": "nominal",
            "axis": {
              "title": "Country",
              "labelAngle": 0, 
              "titleFontSize": 16,
              "labelFontSize": 14,
              "titleFont": "Helvetica Neue",
              "labelFont": "Helvetica Neue",
              "grid": true  
            }
          },
          "y": {
            "field": "Tree_Cover_Mha",
            "type": "quantitative",
            "axis": {
              "title": "Tree Cover (Mha)",
              "titleFontSize": 16,
              "labelFontSize": 14,
              "titleFont": "Helvetica Neue",
              "labelFont": "Helvetica Neue",
              "grid": true  
            }
          },
          "size": {
            "field": "Tree_Cover_Mha",
            "type": "quantitative"
          },
          "color": {
            "field": "Tree_Cover_Mha",
            "type": "quantitative",
            "scale": {
              "scheme": "dark2"
            },
            "legend": {
              "title": "Tree Cover (Mha)",
              "titleFontSize": 16,
              "labelFontSize": 14,
              "titleFont": "Helvetica Neue",
              "labelFont": "Helvetica Neue"
            }
          },
          "tooltip": [
            {"field": "Country", "type": "nominal"},
            {"field": "Tree_Cover_Mha", "type": "quantitative"}
          ]
        },
        "selection": {
          "brush": {"type": "interval", "encodings": ["x"]}
        }
      },
      {
        "width": 850,
        "mark": "bar",
        "encoding": {
          "x": {
            "field": "Tree_Cover_Mha",
            "type": "quantitative",
            "axis": {
              "title": "Tree Cover (Mha)",
              "titleFontSize": 16,
              "labelFontSize": 14,
              "titleFont": "Helvetica Neue",
              "labelFont": "Helvetica Neue",
              "grid": true  
            }
          },
          "y": {
            "field": "Country",
            "type": "nominal",
            "axis": {
              "title": "Country",
              "titleFontSize": 16,
              "labelFontSize": 14,
              "titleFont": "Helvetica Neue",
              "labelFont": "Helvetica Neue"
            },
            "sort": "-x"
          },
          "color": {
            "field": "Tree_Cover_Mha",
            "type": "quantitative",
            "scale": {
              "scheme": "dark2"
            },
            "legend": null
          },
          "tooltip": [
            {"field": "Country", "type": "nominal"},
            {"field": "Tree_Cover_Mha", "type": "quantitative"}
          ]
        },
        "transform": [
          {"filter": {"selection": "brush"}},
          {"window": [{"op": "rank", "as": "rank"}]},
          {"filter": "datum.rank <= 5"}
        ]
      }
    ],
    "config": {
      "background": "#f5f5f5",
      "view": {
        "stroke": "transparent",
        "strokeWidth": 1  
      },
      "axis": {
        "grid": true,  
        "gridColor": "#cccccc",  
        "gridOpacity": 0.8  
      },
      "concat": {
        "spacing": 7  
      },
      "legend": {
        "labelLimit": 0,
        "symbolLimit": 0
      }
    }    
}
  
// Function to embed the visualizations
function embedVisualizations() {
  // Embed the 1st visualization
  vegaEmbed('#spec1', spec1, { "actions": false }).catch(console.error);

  // Embed the 2nd visualization
  vegaEmbed('#spec2', spec2, { "actions": false }).catch(console.error);

  // Embed the 3rd visualization
  vegaEmbed('#spec3', spec3, { "actions": false }).catch(console.error);

  // Embed the 4th visualization
  vegaEmbed('#spec4', spec4, { "actions": false }).catch(console.error);

  // Embed the 5th visualization
  vegaEmbed('#spec5', spec5, { "actions": false }).catch(console.error);
}

// Embed visualizations after the document has loaded
document.addEventListener('DOMContentLoaded', embedVisualizations);