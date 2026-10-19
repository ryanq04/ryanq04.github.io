// EDIT TEXT HERE. These are the paragraphs and figure captions shown on the page.
// overview: above the images. Each figures entry: caption and paragraph below that row.
{
const text = {
  "title": "Automotive electronics",
  "overview": `I worked with automotive harnesses and electronic control units (ECUs), analyzing
PCB, cable, and connector designs for signal integrity. The interfaces included
CAN/CAN FD, Automotive Ethernet (10BASE-T1S, 100BASE-T1, 1000BASE-T1, and MultiGig),
and LVDS camera links. I used oscilloscopes, a vector network analyzer (VNA), and
time-domain reflectometry (TDR) to characterize coaxial and high-frequency shielded
twisted-pair cables at frequencies up to 8 GHz.`,
  "figures": [
    {
      "caption": "Automotive electronics: harness and communications measurements",
      "paragraph": ""
    }
  ]
};

// IMAGE SETTINGS BELOW. You only need this section to change images, labels, or sizing.
projects.push({
  "id": "automotive-electronics",
  "title": text.title,
  "category": "Automotive",
  "assets": [
    {
      "src": "images/automotive-electronics/Automotive_Harness_Teardown.jpg",
      "caption": "Automotive Harness Teardown"
    },
    {
      "src": "images/automotive-electronics/Automotive_Communication_Network_Meas.png",
      "caption": "Automotive Communication Network Meas"
    }
  ],
  "figures": [
    {
      "caption": text.figures[0].caption,
      "images": [
        {
          "src": "images/automotive-electronics/Automotive_Harness_Teardown.jpg",
          "width": 24.036
        },
        {
          "src": "images/automotive-electronics/Automotive_Communication_Network_Meas.png",
          "width": 75.964
        }
      ],
      "layout": {
        "width": 593,
        "align": "center",
        "gap": 8,
        "imageHeight": 250
      },
      "paragraph": text.figures[0].paragraph
    }
  ],
  "overview": text.overview
});
}
