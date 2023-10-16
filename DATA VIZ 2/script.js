// Vega-Lite specifications
const spec1 = {
    // ... (Insert the entire JSON content of your first visualization here)
    
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": {
          "text": "Global Tree Cover Loss by Dominant Driver (2001-2022)",
          "fontSize": 16
        },
        "data": {"url": "https://raw.githubusercontent.com/guido2810/FIT3179-S2-2023/main/data_folder/tree_cover_loss_by_dominant_driver_adjusted.csv"},
        "width": 600,
        "height": 400,
        "mark": {
          "type": "bar",
          "cornerRadiusEnd": 4
        },
        "encoding": {
          "y": {
            "field": "Year",
            "type": "ordinal",
            "axis": {
              "title": "Year",
              "titleFontSize": 16,
              "labelFontSize": 14
            }
          },
          "x": {
            "aggregate": "sum",
            "field": "Tree Cover Loss (Mha)",
            "type": "quantitative",
            "axis": {
              "title": "Tree Cover Loss (Million ha, (mha))",
              "titleFontSize": 13,
              "labelFontSize": 12
            }
          },
          "color": {
            "field": "Dominant Driver",
            "type": "nominal",
            "legend": {
              "title": "List Of Dominant Drivers :",
              "titleFontSize": 13,
              "labelFontSize": 11
            },
            "scale": {"scheme": "tableau10"}
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
              "Wildfire"
            ],
            "as": ["Dominant Driver", "Tree Cover Loss (Mha)"]
          }
        ],
        "config": {
          "view": {"stroke": "transparent"},
          "axis": {"grid": false}
        }
      
  };
  
  const spec2 = {
    // ... (Insert the entire JSON content of your second visualization here)
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "description": "Global Annual Tree Cover Loss from Fires (2001-2022)",
        "title": {
          "text": "Global Annual Tree Cover Loss from Fires",
          "fontSize": 20,
          "anchor": "start",
          "color": "black",
          "align": "left"
        },
        "data": {
          "url": "https://raw.githubusercontent.com/guido2810/FIT3179-S2-2023/main/data_folder/annual_tree_cover_loss_from_fires.csv"
        },
        "layer": [
          {
            "mark": {
              "type": "area",
              "line": {"color": "darkred"},
              "color": {
                "x1": 1,
                "y1": 1,
                "x2": 1,
                "y2": 0,
                "gradient": "linear",
                "stops": [
                  {"offset": 0, "color": "white"},
                  {"offset": 1, "color": "darkred"}
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
            "mark": {
              "type": "point",
              "filled": true,
              "fill": "darkred",
              "stroke": "black"
            },
            "encoding": {
              "x": {
                "field": "year",
                "type": "temporal"
              },
              "y": {
                "field": "loss_from_fires_ha",
                "type": "quantitative"
              },
              "size": {"value": 100},
              "tooltip": [
                {"field": "year", "type": "temporal", "title": "Year", "format": "%Y"},
                {
                  "field": "loss_from_fires_ha",
                  "type": "quantitative",
                  "title": "Loss (hectares)",
                  "format": ".2s"
                }
              ]
            }
          }
        ],
        "height": 400,
        "width": 600,
        "config": {
          "legend": {
            "labelFontSize": 14,
            "titleFontSize": 16
          }
        }
      
  };
  
  // Function to embed the visualizations
  function embedVisualizations() {
    // Embed the first visualization
    vegaEmbed('#vis1', spec1, { "actions": false }).catch(console.error);
  
    // Embed the second visualization
    vegaEmbed('#vis2', spec2, { "actions": false }).catch(console.error);
  }
  
  // Embed visualizations after the document has loaded
  document.addEventListener('DOMContentLoaded', embedVisualizations);
  