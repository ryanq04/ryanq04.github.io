// EDIT TEXT HERE. These are the paragraphs and figure captions shown on the page.
// overview: above the images. Each figures entry: caption and paragraph below that row.
{
const text = {
  "title": "Visihelp wearable",
  "overview": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. A closer look at the design,
development, and testing behind this project.`,
  "figures": [
    {
      "caption": "Visihelp: wearable and system block diagram",
      "paragraph": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis
iste natus error sit voluptatem. Praesent commodo cursus magna, vel scelerisque nisl
consectetur et.`
    }
  ]
};

// IMAGE SETTINGS BELOW. You only need this section to change images, labels, or sizing.
projects.push({
  "id": "visihelp",
  "title": text.title,
  "category": "Research",
  "assets": [
    {
      "src": "images/visihelp/Visihelp_Wearable.jpg",
      "caption": "Visihelp Wearable"
    },
    {
      "src": "images/visihelp/Visihelp_Block_Diagram.png",
      "caption": "Visihelp Block Diagram"
    }
  ],
  "figures": [
    {
      "caption": text.figures[0].caption,
      "images": [
        {
          "src": "images/visihelp/Visihelp_Wearable.jpg",
          "width": 32.36
        },
        {
          "src": "images/visihelp/Visihelp_Block_Diagram.png",
          "width": 67.64
        }
      ],
      "layout": {
        "width": 729,
        "align": "center",
        "gap": 8,
        "imageHeight": 280
      },
      "paragraph": text.figures[0].paragraph
    }
  ],
  "overview": text.overview
});
}
