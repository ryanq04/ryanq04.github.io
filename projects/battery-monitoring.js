// EDIT TEXT HERE. These are the paragraphs and figure captions shown on the page.
// overview: above the images. Each figures entry: caption and paragraph below that row.
{
const text = {
  "title": "Battery monitoring",
  "overview": `My first PCB project was a board intended to monitor the temperature and voltage of
a 12 V battery pack for the University of Toronto Formula Racing team.`,
  "figures": [
    {
      "caption": "Battery monitoring: PCB design and bring-up",
      "paragraph": `With guidance
from others, I worked through the PCB design process and encountered mistakes in
mirroring footprints of assymetrical components, missing external op-amp resistors, layout organization, 
and missing pull-down resistors on MOSFET gates that needed a default state. These
issues gave me a quick introduction to the challenges of the PCB design process. Important design
considerations in this board were that it should not passively drain the battery while the vehicle is off. Moreover,
it should reliably pass the temperature and voltage data to the other controllers.`
    }
  ]
};

// IMAGE SETTINGS BELOW. You only need this section to change images, labels, or sizing.
projects.push({
  "id": "battery-monitoring",
  "title": text.title,
  "category": "Automotive",
  "assets": [
    {
      "src": "images/battery-monitoring/utfr_battery_monitoring.png",
      "caption": "utfr battery monitoring"
    },
    {
      "src": "images/battery-monitoring/battery_board_bringup.png",
      "caption": "battery board bringup"
    }
  ],
  "figures": [
    {
      "caption": text.figures[0].caption,
      "images": [
        {
          "src": "images/battery-monitoring/utfr_battery_monitoring.png",
          "width": 47.795
        },
        {
          "src": "images/battery-monitoring/battery_board_bringup.png",
          "width": 52.205
        }
      ],
      "layout": {
        "width": 357,
        "align": "center",
        "gap": 8,
        "imageHeight": 240
      },
      "paragraph": text.figures[0].paragraph
    }
  ],
  "overview": text.overview
});
}
