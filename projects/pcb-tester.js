// EDIT TEXT HERE. These are the paragraphs and figure captions shown on the page.
// overview: above the images. Each figures entry: caption and paragraph below that row.
{
const text = {
  "title": "Automated PCB tester",
  "overview": `Designed an automated circuit testing device using an STM32 Arm Cortex-M4 platform to
acquire and analyze signals. Integrated motor control, a camera interface, signal
processing, and UART communication using C and Python to probe pads with 5 mm accuracy
at a sampling rate of 1 MS/s. Learn more about this project at https://github.com/ryanq04/automated_pcb_tester`,
  "figures": [
    {
      "caption": "Flying-probe tester inspiration",
      "paragraph": ""
    },
    {
      "caption": "Automated PCB testing: components, demo, and ADC measurements",
      "paragraph": ""
    }
  ]
};

// IMAGE SETTINGS BELOW. You only need this section to change images, labels, or sizing.
projects.push({
  "id": "pcb-tester",
  "title": text.title,
  "category": "Electronics",
  "assets": [
    {
      "src": "images/pcb-tester/flying_probe_tester_inspiration.png",
      "caption": "Flying-probe tester inspiration"
    },
    {
      "src": "images/pcb-tester/automatic_pcb_tester_parts.jpg",
      "caption": "BOM"
    },
    {
      "src": "images/pcb-tester/automatic_pcb_tester.mp4",
      "poster": "images/pcb-tester/Automatic_PCB_Tester.jpg",
      "caption": "Demo"
    },
    {
      "src": "images/pcb-tester/automatic_pcb_tester_adc_fft.jpg",
      "caption": "Time-Domain and FFT"
    }
  ],
  "figures": [
    {
      "caption": text.figures[0].caption,
      "paragraph": text.figures[0].paragraph,
      "layout": {
        "width": 470,
        "align": "center",
        "gap": 8,
        "imageHeight": 260
      },
      "images": [
        {
          "src": "images/pcb-tester/flying_probe_tester_inspiration.png",
          "width": 100
        }
      ]
    },
    {
      "caption": text.figures[1].caption,
      "layout": {
        "width": 614.539,
        "align": "center",
        "gap": 8,
        "imageHeight": 260
      },
      "images": [
        {
          "src": "images/pcb-tester/automatic_pcb_tester_parts.jpg",
          "width": 0.75
        },
        {
          "src": "images/pcb-tester/automatic_pcb_tester.mp4",
          "width": 0.61926606
        },
        {
          "src": "images/pcb-tester/automatic_pcb_tester_adc_fft.jpg",
          "width": 0.93386774
        }
      ],
      "paragraph": text.figures[1].paragraph
    }
  ],
  "overview": text.overview
});
}
