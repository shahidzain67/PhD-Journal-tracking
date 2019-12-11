+++
author = ""
title = "Energy efficiency in lower limb prostheses"
date = "2019-12-11"
description = "Energy efficiency in lower limb prostheses"
tags = ["Masters", "Fundamentals of Prosthetics and Orthotics"]
categories = ["Masters", "Fundamentals of Prosthetics and Orthotics"]
series = ["University Journal"]
aliases = ["migrate-from-jekyl"]
+++

# Metabolic Cost of Amputee Walking

### Cost of Transport (COT)

- Metabolic energy consumption per minute goes up with speed as one would expect.
- So, the energy efficiency of walking is best represented by metabolic cost per metre travelled (or cost of transport).
- Furthermore, we normalise by weight to compare between subjects.

{{<figure src="/Energy/run.png" position="center" style="border-radius: 8px;" >}}

---

<br>

### Effect of Amputation Level

{{<figure src="/Energy/transport.png" position="center" style="border-radius: 8px;" caption="Waters & Mulroy (1999) Gait & posture" captionPosition="center" captionStyle="color: white;" >}}

---

<br>

### ESR vs SACH

{{<figure src="/Energy/sach.png" position="center" style="border-radius: 8px;" >}}

- a) A typical energy storage and return (ESR) foot, showing the blades designed to store strain energy during stance and release it again at push-off.

- b) Conventional solid ankle cushioned heel (SACH) foot.

- c) Cut-through of SACH foot showing the wooden keel beneath the outer cover and the significant cushioning in the heel section.

<br>

Study 1: ESR effect much less than amputation level

> Macfarlane et al.(1997) JPO: Journal of Prosthetics and Orthotics

<br>

Study 2: ESR slightly lower than SACH but only in individual studies

> Hsu et al. (2006)  Arch Phys Med Rehab 87

<br>

<mark>Different studies have different results</mark>

- Looking across studies, only the non-amputees are clearly lower 

---

<br><br>

### Salford's meta-analysis

> Transtibial amputee gait efficiency: Energy storage and return versus solid ankle cushioned heel prosthetic feet
>
> James Gardiner, Abu Zeeshan Bari, David Howard, Laurence Kenney
>
> JRRD, VOL. 53, NO. 6, 2016

<br>

{{<figure src="/Energy/salford.png" position="center" style="border-radius: 8px;" >}}

- a) A typical energy storage and return foot, showing the blades designed to store strain energy during stance and release it again at push-off.

- b) Conventional solid ankle cushioned heel (SACH) foot.

- c) Cut-through of SACH foot showing the wooden keel beneath the outer cover and the significant cushioning in the heel section.

<br>

### Salford's meta-analysis: Method

- Protocol differences (e.g. treadmill vs free-walking)

- So normalize results from different studies to remove protocol effects

- But few studies include a non-amputee group

- However, many studies do compare ESR and SACH feet

- So we normalized the ESR results w.r.t. SACH results:

        normalised COT = COTESR / COTSACH

<br>

### Salford's meta-analysis: Results

{{<figure src="/Energy/results.png" position="center" style="border-radius: 8px;" >}}

---

<br><br>

### Why don’t ESR feet perform better?

- Push-off plantarflexion missing
- Very limited push-off power
- Push-off requires a plantarflexion moment while plantarflexing
- But plantarflexion beyond neutral leads to a dorsiflexion moment

---

<br><br>

### Non-Amputee Performance: The Potential for ESR

{{<figure src="/Energy/ESR.png" position="center" style="border-radius: 8px;" >}}

---

<br>

### Non-Amputee Performance: How is high push-off power achieved?

{{<figure src="/Energy/high.png" position="center" style="border-radius: 8px;" >}}

> Ishikawa et al. (2005) Journal of Applied Physiology 99

---

<br><br>

### Current devices

##### Energy Recycling Foot

{{<figure src="/Energy/collins.png" position="center" style="border-radius: 8px;" >}}

> Collins & Kuo (2010) PLOS ONE 5

<br><br>

##### Adaptive Prosthetic Ankle-Foot

{{<figure src="/Energy/william.png" position="center" style="border-radius: 8px;" >}}

> Williams, Hansen & Gard (2009) 
>
>Journal of biomechanical engineering 131

A–C: Load acceptance

   - Achilles spring unlocked 

C–E: Mid-stance

   - Achilles spring locked
   - Stores energy

E–G: Push-off

   - Achilles spring locked
   - Returns energy

G–A: Swing

 - Achilles spring unlocked

<br><br>

##### Bionic ankle-foot prosthesis

{{<figure src="/Energy/herr.png" position="center" style="border-radius: 8px;" >}}

> Herr & Grabowski (2012) Proc R Soc B 279

- The reduction in amputee metabolic cost is slightly less than the energy input from the electric motor (Herr & Grabowski 2012) 

- So from a passive ESR point of view, the design is not an advance

---

<br><br>

### Conclusions

- Our meta-analysis shows that the reduction in metabolic cost associated with ESR feet is disappointing (<3%).
 
- It is likely that this is largely due to a lack of push-off power -> Plantarflexion beyond neutral leads to a dorsiflexion moment

- Novel designs have been proposed to restore more natural push-off, including: Collins et al; Williams, Hansen & Gard; Herr et al.

- This encouraged us to look at using miniature hydraulics to achieve better push-off. 

---

<br><br><br><br>

# A novel hydraulic ESR prosthetic ankle

### Salford Review

> James Gardiner, Abu Zeeshan Bari, Laurence Kenney,   Martin Twiste, David Moser, Saeed Zahedi, David Howard
>
> IEEE TRANSACTIONS ON NEURAL SYSTEMS AND REHABILITATION ENGINEERING, VOL. 25, NO. 12, 2017

---

<br><br>

### Salford Review: What is theoretically possible?

{{<figure src="/Energy/theory.png" position="center" style="border-radius: 8px;" >}}

| Stage of gait cycle        | Approximate work (J) |
|----------------------------|----------------------|
| Load acceptance and stance | 21                   |
| Push-off                   | 12                   |
| Swing                      | 0                    |

---

<br><br>

### Salford Review: Why Hydraulics?

- Hydraulic accumulators are well suited to rapid energy storage and return over very large numbers of cycles, which is not the case for batteries.

- Hydraulic actuation is ideally suited to transferring energy between joints because this involves only pipes and fluid, rather than gears and linkages.

- High operating pressures (up to 200bar) mean they have very high power densities and therefore are well suited to miniaturisation.

{{<figure src="/Energy/hydraulic.png" position="center" style="border-radius: 8px;" >}}

---

<br><br>

### Salford Review: Our Design -> VDA, accumulator and parallel spring

- Hydraulic VDA allows continuous control of torque
    - Acts as pump for eccentric work
    - Acts as motor for concentric work

<br>

- Accumulator is system’s energy store

- Gearbox and spring modify the torque and speed required from the VDA

{{<figure src="/Energy/review.png" position="center" style="border-radius: 8px;" >}}

{{<figure src="/Energy/1.png" position="center" style="border-radius: 8px;" >}}

{{<figure src="/Energy/2.png" position="center" style="border-radius: 8px;" >}}

---

<br><br>

### Salford Review: Ankle torque requirements

- The parallel spring should provide a good approximation to the pseudo-stiffness of the intact ankle during stance.

- Then the hydraulic VDA will only need to provide the difference.

{{<figure src="/Energy/ankle.png" position="center" style="border-radius: 8px;" >}}

---

<br><br>

### Salford Review: Modelling the Parallel Spring

- We need a spring characteristic that mimics the pseudo-stiffness of the intact ankle during stance.

- So we chose an exponential function of ankle angle θa as follows:

{{<figure src="/Energy/equation.png" position="center" style="border-radius: 8px;" >}}
{{<figure src="/Energy/ankle.png" position="center" style="border-radius: 8px;" >}}

---

<br><br>

### Salford Review: Other Modelling Assumptions


- Perfect control: Swash plate angle adjusted to give desired ankle torque at all times

- Ankle angle and torque follow healthy profiles
    - This is the model input data
    - In practise the ankle angle profile will depend on how the amputee adapts to the device

<br>

- Losses modelled in VDA and gearbox

- Accumulator assumed to be lossless (rapid charge/discharge and small pressure changes)

---

<br><br>

### Salford Review: Input Data Used to Drive Model

{{<figure src="/Energy/input.png" position="center" style="border-radius: 8px;" >}}

Input data is optimistic but within range seen in healthy gait

Would amputees benefit from walking in a manner that provides good push-off?

---

<br><br>

### Salford Review: Alternative designs to be optimised

##### DESIGN_1
- gearbox ratio R
- spring parameters A, B and λ
    - corresponds to a spring with a free neutral point (i.e. not forced through the origin)

<br>

##### DESIGN_2
- gearbox ratio R
- spring parameters A and λ, with B=−A
    - corresponds to a spring that is forced to go through the origin (i.e. when standing upright there is no spring torque)

<br>

##### DESIGN_3 
- gearbox ratio R only 
- no parallel spring

---

<br><br>

### Salford Review: Results and Conclusions

- Design 1 performs best

- Design 2 performs less well

- Over each gait cycle of level walking, Design_1 increases stored accumulator energy by the equivalent of 22% of normal push-off.

- 6 gait cycles of level walking would compensate for the energy lost in one cycle of uphill walking.
    - 6 x 22% compensates for -134% (percentages of normal push-off).

<br>

- Parallel spring is essential to reduce size of VDA and gearbox and improve efficiency (hence Design_3 is poor).

- If we could halve the losses, then the energy stored in level walking would double (+44%).
    - Disconnecting during swing would reduce losses by 35%.

<br>

- If the eccentric work prior to push-off was halved, the energy lost in level walking would be 7.7 joules per gait cycle (-63%).

---

<br><br>

### Salford Review: Mechanical Design Weight Considerations - VDA

- Linear relationship between VDA mass and VDA displacement
    - For perfect miniaturisation this would go through the origin
    - In practice the limits of miniaturisation prevent this

<br>

- For perfect miniaturisation our 0.256cc/rev VDA would weigh 0.07kg

---

<br><br>

### Salford Review: Mechanical Design Weight Considerations - Gearbox
- For our specification, a standard off-the-shelf planetary gearbox from  Reliance Precision is ~0.5kg

- This uses standard components and common materials such as stainless steel and aluminium alloy

- We assume a custom gearbox using weight saving materials could reduce this to ~0.3kg (a guess on our part)

---

<br><br>

### Salford Review: Mechanical Design Weight Considerations - Accumulator

- A standard off-the-shelf 250cc accumulator weighs ~1kg

- According to CTG Ltd., carbon fibre construction could reduce this by 75%

- The pylon and accumulator could share structural elements to further reduce the additional weight associated with the accumulator

- We assume an accumulator weight of ~0.25kg

---

<br><br>

### Salford Review: Mechanical Design Weight Considerations - Oil

- Assuming pre-charge pressure of 90bar and a maximum pressure of 200bar, the maximum oil volume in the accumulator would be ~110cc

- Add 50cc for the oil in the rest of the system (a guess on our part)

- This gives a total oil volume of 160cc, which would weigh ~0.15kg

---

<br><br>

### Salford Review: Mechanical Design Weight Considerations - Total

- VDA – 0.3kg

- Gearbox – 0.3kg

- Accumulator – 0.25kg

- Hydraulic oil – 0.15kg

- Parallel spring, prosthetic foot & other componentry – 1.6kg

- TOTAL – 2.6kg

- (for comparison the BiOM is 2.3kg)

---

<br><br>

### Conclusions

##### Design_1 shows promise

- Provides normal ankle torque in level walking including full push-off.
- Stores excess energy in the accumulator – 22% of normal push-off over each gait cycle in level walking.

##### Major challenges include:

- Designing an efficient miniature VDA.
- Reducing losses – decouple device during swing?
- Reducing weight of all components.
- Control system design.
- Understanding the trade-off between eccentric work (before push-off) and concentric push-off work in amputee walking.
