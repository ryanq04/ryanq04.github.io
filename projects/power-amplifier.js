// EDIT TEXT HERE. These are the paragraphs and figure captions shown on the page.
// overview: above the images. Each figures entry: caption and paragraph below that row.
{
const text = {
  "title": "8-16 MHz Class D RF Choke Power Amplifier",
  "overview": `I designed a two-layer RF power amplifier module for a
16 MHz FM radio. The project combined filtering, push-pull MOSFET switching,
a transformer, and op-amp/comparator circuitry, with PCB design in Altium and circuit
simulation in Multisim. Working through hardware revisions gave me practical
experience with inductive voltage transients, self-resonance, and parasitic effects,
and showed how strongly component selection influences RF performance.`,
  "figures": [
    {
      "caption": "Power amplifier prototypes and revised Altium PCB layout",
      "paragraph": `One important failure occurred when the comparator input was left floating with
power applied but no input signal. The comparator could hold its output high,
leaving a MOSFET continuously on, breaking our circuit. Adding an input
pull-down sets the default MOSFET state OFF, which prevents this fatal failure.

MOSFET selection also required sufficient margin for maximum current.
In order to optimize lower gate capacitance, we selected a weaker MOSFET, which broke under
testing - presumably because our SPICE simulations did not account for non-idealities. This shows
the importance of reviewing device ratings and switching characteristics early; understanding 
which parameters are crucial, and which ones are for optimization. 

Our inductor selection was problematic to self-resonant frequency and Q factor issues at
16 MHz. Our initial choices contributed to distorted outputs and component failures.
From this, we learned to analyze the components for its parasitic effects, and to take care whenever
 assuming it will operate as its ideal model.`
    },
    {
      "caption": "Single-ended switching stage: operating principle",
      "paragraph": String.raw`The comparator converts the sinusoidal input into a square wave to drive the MOSFET.
In our original single-ended design, the MOSFET pulls the drain to ground when on.
When it turns off, the RF choke maintains current, causing the drain voltage to rise.
For an ideal choke in periodic steady state, the current returns to its initial
value each cycle, so
\[
\overline{v_L}=\frac{L}{T_s}\bigl[i_L(T_s)-i_L(0)\bigr]=0,
\qquad v_L=V_{\mathrm{DD}}-v_{\mathrm{DS}}
\quad\Rightarrow\quad\overline{v_{\mathrm{DS}}}=V_{\mathrm{DD}}.
\]
Here, \(L\) is the choke inductance, \(i_L\) its current, and \(T_s\) the switching
period. Assuming a square drain waveform that is zero during the on-time fraction
\(D\), the average drain voltage gives
\[
V_{\mathrm{DD}}=D\cdot0+(1-D)V_{\mathrm{drain,peak}}
\quad\Rightarrow\quad
V_{\mathrm{drain,peak}}=\frac{V_{\mathrm{DD}}}{1-D}
=\frac{12}{0.5}=24\,\mathrm{V}.
\]
This estimates the drain high level for the assumed square waveform, before output
filtering into the 50-ohm load.`

    },
    {
      "caption": "Revision 2 power amplifier schematic",
      "paragraph": ""
    },
    {
      "caption": "Center-tapped transformer: push-pull operation and voltage waveforms",
      "paragraph": String.raw`In Revision 2, we switched to a push-pull design using two MOSFETs driven by opposite
square waves and connected to a center-tapped transformer. Under ideal complementary
50% duty switching, each MOSFET drain still swings from 0 to 24 V, but the voltage across the full
primary alternates between -24 V and +24 V.

With an ideal 1:1 full-primary-to-secondary turns ratio, fed into a low pass taking the fundamental frequency
of the square wave and delivering it to the 50-ohm load, this doubles the fundamental peak voltage:
\[
V_{1,\mathrm{pk,single}}=\frac{2(24)}{\pi}\approx15.28\,\mathrm{V},
\qquad V_{1,\mathrm{pk,push\text{-}pull}}=\frac{2(48)}{\pi}\approx30.56\,\mathrm{V}.
\]
Since \(P=V_{1,\mathrm{pk}}^2/(2R)\), the theoretical RF power increases from
2.33 W to 9.34 W. Push-pull therefore provides potentially
four times the load power without increasing the 24 V peak stress on either
MOSFET.`

    }
  ]
};

// IMAGE SETTINGS BELOW. You only need this section to change images, labels, or sizing.
projects.push({
  "id": "power-amplifier",
  "title": text.title,
  "category": "Electronics",
  "assets": [
    {
      "src": "images/power-amplifier/Theory_of_center_tap_push_pull_amp.jpg",
      "caption": "Hand-drawn push-pull transformer architecture and voltage waveforms"
    },
    {
      "src": "images/power-amplifier/Power_Amp_Rev2.png",
      "caption": "Power Amp Rev2"
    },
    {
      "src": "images/power-amplifier/Power_Amp_Rev_1.png",
      "caption": "Power Amp Rev 1"
    },
    {
      "src": "images/power-amplifier/Updated PCB for power amplifier.png",
      "caption": "Updated PCB for power amplifier"
    },
    {
      "src": "images/power-amplifier/Schematic for Rev2 Power Amp.png",
      "caption": "Schematic for Rev2 Power Amp"
    },
    {
      "src": "images/power-amplifier/Class_E_Power_Amp_architecture.png",
      "caption": "Single-ended RF amplifier architecture"
    }
  ],
  "figures": [
    {
      "caption": text.figures[0].caption,
      "images": [
        {
          "src": "images/power-amplifier/Power_Amp_Rev_1.png",
          "width": 21.78
        },
        {
          "src": "images/power-amplifier/Power_Amp_Rev2.png",
          "width": 30.436
        },
        {
          "src": "images/power-amplifier/Updated PCB for power amplifier.png",
          "width": 47.784
        }
      ],
      "layout": {
        "width": 537,
        "align": "center",
        "gap": 10,
        "imageHeight": 280
      },
      "paragraph": text.figures[0].paragraph
    },
    {
      "caption": text.figures[1].caption,
      "images": [
        {
          "src": "images/power-amplifier/Class_E_Power_Amp_architecture.png",
          "width": 100.0
        }
      ],
      "layout": {
        "width": 374,
        "align": "center",
        "gap": 8,
        "imageHeight": 190
      },
      "paragraph": text.figures[1].paragraph
    },
    {
      "caption": text.figures[2].caption,
      "paragraph": text.figures[2].paragraph,
      "images": [
        {
          "src": "images/power-amplifier/Schematic for Rev2 Power Amp.png",
          "width": 100
        }
      ],
      "layout": {
        "width": "100%",
        "align": "center",
        "gap": 8,
        "imageHeight": 300
      }
    },
    {
      "caption": text.figures[3].caption,
      "paragraph": text.figures[3].paragraph,
      "images": [
        {
          "src": "images/power-amplifier/Theory_of_center_tap_push_pull_amp.jpg",
          "width": 100
        }
      ],
      "layout": {
        "width": 600,
        "align": "center",
        "gap": 8,
        "imageHeight": 420
      }
    }
  ],
  "overview": text.overview
});
}
