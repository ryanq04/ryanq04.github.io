// EDIT TEXT HERE. These are the paragraphs and figure captions shown on the page.
// overview: above the images. Each figures entry: caption and paragraph below that row.
{
const text = {
  "title": "Advanced Driver Assistance Systems Study at Tsinghua University, Department of Electronic Engineering",
  "overview": `I supported driver mental workload research investigating how EEG and other physiological
signals could inform advanced driver assistance systems, gaining experience in experiment design, literature
reviews, dataset preparation, neural signal processing, and AI classification model
testing. I worked under the guidance of Tianqi Liu (https://orcid.org/0009-0007-5531-0451) and Dr. Yanjun Qin (https://ieeexplore.ieee.org/author/37086556268). `,
  "figures": [
    {
      "caption": "EEG experimental setup",
      "paragraph": String.raw`To give some context on the research, the study I contributed to 
      recorded EEG using Neuracle's NeuSen W Series Wireless EEG Acquisition System
at 1000 Hz across 59 EEG electrodes. Recordings from participants were 
used to examine driver mental workload during acceleration, turning, lane changes, and steady driving.

The simulator combined a six-degree-of-freedom motion platform with a circular
projection screen. Software and driving scenes provided by 51WORLD recreated an
~11 km route based on real roads in Beijing, with
position-triggered road events prompting participants to respond to the stimulus.

A 0.5 to 40 Hz band is used to retain brain-wave rhythms used in workload
analysis while reducing slow baseline drift and high-frequency interference.

Baseline drift can arise from electrode contact changes, sweating, and movement;
electrical interference can include 50/60 Hz powerline noise, which lies outside of the
filter's passband. The passband includes theta (roughly 4 to 8 Hz), alpha (8 to 13 Hz), and beta (13 to 30 Hz),
the bands commonly examined in mental workload research. 

A linear-phase FIR filter is used to extract the passband. The advantage of this filter is that it 
changes the input's phase proportionally to frequency, meaning its transfer function introduces a constant time
delay that can be removed in post-processing to preserve alignment between EEG responses
and driving events across different bands.
\[\theta(\omega)=-\omega T+\theta_0
\quad\Rightarrow\quad \tau_g=-\frac{d\theta}{d\omega}=T=\text{constant}.\]
Here, \(\theta\) is phase shift, \(\omega\) angular frequency, \(T\) the constant delay,
\(\theta_0\) a phase offset, and \(\tau_g\) group delay.

Because blinks, eye movements, and muscle activity (such as jaw clenching) can overlap
with brain activity in frequency,
filtering alone cannot reliably separate them. Independent component analysis (ICA)
treats each electrode recording as a mixture of signals and extracts statistically
independent components. These patterns can separate EEG artifacts based on their origin, and 
the data can be reconstructed with the unwanted noise sources removed.`
    }
  ]
};

// IMAGE SETTINGS BELOW. You only need this section to change images, labels, or sizing.
projects.push({
  "id": "eeg",
  "title": text.title,
  "category": "Research",
  "assets": [
    {
      "src": "images/eeg/EEG_setup_labelled.png",
      "caption": "EEG setup labelled"
    },
    {
      "src": "images/eeg/EEG_test_setup.png",
      "caption": "EEG test setup"
    }
  ],
  "figures": [
    {
      "caption": text.figures[0].caption,
      "images": [
        {
          "src": "images/eeg/EEG_setup_labelled.png",
          "width": 1.7631935
        },
        {
          "src": "images/eeg/EEG_test_setup.png",
          "width": 3.2011834
        }
      ],
      "layout": {
        "width": 752.657,
        "align": "center",
        "gap": 8,
        "imageHeight": 150
      },
      "paragraph": text.figures[0].paragraph
    }
  ],
  "overview": text.overview
});
}
