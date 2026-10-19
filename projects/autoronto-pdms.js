// EDIT TEXT HERE. These are the paragraphs and figure captions shown on the page.
// overview: above the images. Each figures entry: caption and paragraph below that row.
{
const text = {
  "title": "aUToronto · Power Distribution Management System (PDMS)",
  "overview": `Designed PCB and firmware for power distribution controller (12V, 40A across 20
channels). Used a Teensy 4.1 microcontroller for switch control, power monitoring, and
CAN bus communication. This hardware and firmware supported the team’s consecutive
victories since 2024, and is currently used for autonomous driving on public roads.`,
  "figures": [
    {
      "caption": "PDMS implementation: board layout and bring-up",
      "paragraph": `Here is the PDMS. It uses relay-based switching to provide peripherals like cameras,
GPS, LiDAR, and radar with reliable power. In this 6 layer board (SIG-GND-SIG-PWR-GND-PWR), 20 channels have their current monitored
 using a small low-side resistor, fed to an amplifier, then to the ADC. Currently working on an improved version, 
 replacing MCU with STM32, replacing relays with high side MOSFETs, and replacing 12-5V LDO with a buck converter.`
    },
    {
      "caption": "High Level Schematics and our Self-Driving Vehicle"
    }
  ]
};

// IMAGE SETTINGS BELOW. You only need this section to change images, labels, or sizing.
projects.push({
  "id": "autoronto-pdms",
  "title": text.title,
  "category": "Automotive",
  "assets": [
    {
      "src": "images/autoronto-pdms/aUToronto_PDMS_Bringup.jpg",
      "caption": "PDMS Bringup"
    },
    {
      "src": "images/autoronto-pdms/aUToronto_PDMS_altium.png",
      "caption": "PDMS 3D Model"
    },
    {
      "src": "images/autoronto-pdms/aUToronto_PDMS_High_Level.png",
      "caption": "aUToronto PDMS High Level Schematics"
    },
    {
      "src": "images/autoronto-pdms/Autoronto_Chevy_Bolt.jpg",
      "caption": "Chevrolet Bolt with Mounted with Sensors"
    }
  ],
  "figures": [
    {
      "caption": text.figures[0].caption,
      "images": [
        {
          "src": "images/autoronto-pdms/aUToronto_PDMS_altium.png",
          "width": 44.199
        },
        {
          "src": "images/autoronto-pdms/aUToronto_PDMS_Bringup.jpg",
          "width": 55.801
        }
      ],
      "layout": {
        "width": 718,
        "align": "center",
        "gap": 8,
        "imageHeight": 180
      },
      "paragraph": text.figures[0].paragraph
    },
    {
      "caption": text.figures[1].caption,
      "images": [
        {
          "src": "images/autoronto-pdms/aUToronto_PDMS_High_Level.png",
          "width": 65.163
        },
        {
          "src": "images/autoronto-pdms/Autoronto_Chevy_Bolt.jpg",
          "width": 34.837
        }
      ],
      "layout": {
        "width": 654,
        "align": "center",
        "gap": 8,
        "imageHeight": 300
      },
      "paragraph": text.figures[1].paragraph
    }
  ],
  "overview": text.overview
});
}
