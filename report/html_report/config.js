report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Stopwatch_started.png",
        "test": "..\\bitmaps_test\\20240506-215050\\Stopwatch_started.png",
        "selector": "body",
        "fileName": "Stopwatch_started.png",
        "label": "Stopwatch started",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.65765380859375,
          "misMatchPercentage": "0.66",
          "analysisTime": 59
        },
        "diffImage": "..\\bitmaps_test\\20240506-215050\\failed_diff_Stopwatch_started.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Stopwatch_before_one_circle.png",
        "test": "..\\bitmaps_test\\20240506-215050\\Stopwatch_before_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_before_one_circle.png",
        "label": "Stopwatch before one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.18030802408854169,
          "misMatchPercentage": "0.18",
          "analysisTime": 51
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Stopwatch_after_one_circle.png",
        "test": "..\\bitmaps_test\\20240506-215050\\Stopwatch_after_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_after_one_circle.png",
        "label": "Stopwatch after one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.6946563720703125,
          "misMatchPercentage": "0.69",
          "analysisTime": 54
        },
        "diffImage": "..\\bitmaps_test\\20240506-215050\\failed_diff_Stopwatch_after_one_circle.png"
      },
      "status": "fail"
    }
  ]
});