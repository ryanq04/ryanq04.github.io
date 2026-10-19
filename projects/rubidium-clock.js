// EDIT TEXT HERE. These are the paragraphs and figure captions shown on the page.
// overview: above the images. Each figures entry: caption and paragraph below that row.
{
const text = {
  "title": "Rubidium clock systems",
  "overview": `I characterized the frequency stability and phase noise of several rubidium
oscillators using a Symmetricom 5125A Phase Noise Tester, and several atomic frequency standards. 
I was given these tasks by my mentor, a retired electronics engineer who repairs and resells specialized hardware on eBay.`,
  "figures": [
    {
      "caption": "Rubidium clock hardware, regulator boards, and phase-noise measurement setup",
      "paragraph": `In this garage lab, I soldered voltage
regulation and lock-detection boards, measured phase noise and Allan deviation. 
This short project gave me hands-on experience soldering and using lab equipment.
Also, it gave me some background knowledge for understanding Phase Locked Loops and Crystal Oscillators.`
    }
  ]
};

// IMAGE SETTINGS BELOW. You only need this section to change images, labels, or sizing.
projects.push({
  "id": "rubidium-clock",
  "title": text.title,
  "category": "Electronics",
  "assets": [
    {
      "src": "images/rubidium-clock/Rubidium_Clocks.png",
      "caption": "Rubidium Clocks"
    },
    {
      "src": "images/rubidium-clock/Rubidium_CLK_Voltage_Regulator_PCBs.png",
      "caption": "Rubidium CLK Voltage Regulator PCBs"
    },
    {
      "src": "images/rubidium-clock/Rubidium_Clock_Phase_Noise_Meas_R_CLK.png",
      "caption": "Rubidium Clock Phase Noise Meas R CLK"
    }
  ],
  "figures": [
    {
      "caption": text.figures[0].caption,
      "images": [
        {
          "src": "images/rubidium-clock/Rubidium_Clocks.png",
          "width": 45.216
        },
        {
          "src": "images/rubidium-clock/Rubidium_CLK_Voltage_Regulator_PCBs.png",
          "width": 27.348
        },
        {
          "src": "images/rubidium-clock/Rubidium_Clock_Phase_Noise_Meas_R_CLK.png",
          "width": 27.436
        }
      ],
      "layout": {
        "width": 550,
        "align": "center",
        "gap": 8,
        "imageHeight": 260
      },
      "paragraph": text.figures[0].paragraph
    }
  ],
  "overview": text.overview
});
}
