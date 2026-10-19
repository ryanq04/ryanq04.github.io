// EDIT TEXT HERE. These are the paragraphs and figure captions shown on the page.
// overview: above the images. Each figures entry: caption and paragraph below that row.
{
const text = {
  "title": "Buck converter",
  "overview": `Following our electric motors course, I worked with two of my friends on the schematic and PCB for a buck
converter intended to provide adjustable voltage to a DC motor salvaged from an old
washing machine. We targeted operation up to 30 V and 10 A, with the goal of using
the motor in a homemade wood lathe. The project is currently on hold while our team
focuses on work during our PEY interships.`,
  "figures": [
    {
      "caption": "Buck converter: board design and simulation",
      "paragraph": `The design features a basic buck converter using discrete components.
      It uses an NMOS for low R_ds and it has a bootstrap circuit with cascaded drivers
      to have sharp control on the gate source voltage of the FET. The motor has a built in 
      tachometer which we intended to use for speed control feedback. We use resistive current sensing for feedback as well.`
    }
  ]
};

// IMAGE SETTINGS BELOW. You only need this section to change images, labels, or sizing.
projects.push({
  "id": "buck-converter",
  "title": text.title,
  "category": "Electronics",
  "assets": [
    {
      "src": "images/buck-converter/Buck_Converter.png",
      "caption": "Buck Converter 3D Model"
    },
    {
      "src": "images/buck-converter/Buck_Simultion.png",
      "caption": "Buck LTSPICE Simulation"
    }
  ],
  "figures": [
    {
      "caption": text.figures[0].caption,
      "images": [
        {
          "src": "images/buck-converter/Buck_Converter.png",
          "width": 55.2123
        },
        {
          "src": "images/buck-converter/Buck_Simultion.png",
          "width": 74.7877
        }
      ],
      "layout": {
        "width": 482.5,
        "align": "center",
        "gap": 8,
        "imageHeight": 234
      },
      "paragraph": text.figures[0].paragraph
    }
  ],
  "overview": text.overview
});
}
