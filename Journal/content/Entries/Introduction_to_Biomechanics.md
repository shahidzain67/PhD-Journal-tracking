+++
author = ""
title = "Introduction to Biomechanics"
date = "2019-10-09"
description = "Fundamentals of Prosthetics and Orthotics"
tags = ["Masters", "Fundamentals of Prosthetics and Orthotics"]
categories = ["Masters"]
series = ["University Journal"]
aliases = ["migrate-from-jekyl"]
+++

<font size="+7" color="orange"><center> Definitions </center></font>  
---

- Rigid Body:
  - Body which cannot be deformed, stretched or compressed
  - A body whose particles occupy fixed positions with respect to each other. Body segment parameters are constant for each subject.
     
    
- Rigid-body Dynamics:
  - The dynamics of a rigid body system is defined by its equations of motion, which are derived using either Newton’s laws of motion
   
   
- Biomechanics:
  - Bios = life
  - Mechanics = study of the effect of forces on bodies during static and dynamic situations
  - Therefore Biomechanics = A branch of science that deals with the forces and the effects of forces on living systems and matter
   

- Kinematics:
  - A branch of dynamics concerned with the description of motion
  - Spatial or temporal
  - Qualitative or Quantitative
  - Linear and Angular motion
   

- Reference Systems:
  - Linear
  - Angular
   

- Kinetics:
  - A branch of dynamics concerned with the causes of motion and the action of forces
   

<br>

---

<font size="+3" color="gree"><center> Biomechanics </center></font>  
---  

- Mechanics can be divided into:
  - **Statics:** The study of systems that are in a constant state of motion, whether at rest with no motion or moving at a constant velocity without acceleration
     
  - **Dyanamics:** the branch of mechanics used to evaluate objects that are being accelerated 
<br>

---
<font size="+7" color="orange"><center> Accelerations of Body Segments </center></font>  
---  

We need to take into account the following key components at the ankle joint:

- Vertical and horizontal ground reaction forces

- Distance from ground to joint centre in vertical and horizontal directions

- Weight of the component acting perpendicular to segment

- Distance to centre of mass in horizontal from proximal joint

- Distance to the centre of mass to proximal joint in vertical direction

- Moment of inertia about the centre of mass of the segment

- Angular accelerations of the body segment

- Inertial force acting perpendicular to the body segment.
<br>

---
<font size="+7" color="orange"><center> Rigid Body Mechanics </center></font>  
---  

{{<figure src="/Rigid_Body_Mechanics/RBM.png" class="post-cover" align="centre">}}

<br>

---
<font size="+7" color="orange"><center> Kinematics Pros and Cons </center></font>  
--- 

| Advantages                        | Disadvantages                                      |
|-----------------------------------|----------------------------------------------------|
| Generally easy to obtain          | Only describes motion                              |
| Determination of accuracy is easy | Difficult to discriminate important variables from |
| Minimal expertise                 | Idiosyncratic variables                            |
| Feedback can be immediate         | Not indicative of causes of the motion             |

<br>

---
<font size="+7" color="orange"><center> Kinetics Pros and Cons </center></font>  
--- 

| Advantages                                                       | Disadvantages                                                                               |
|------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Defines which structures cause the motion                        | Requires synchronisation of data acquisition systems  (e.g., videography with force plates) |
| Can be used to simulate motion and describe resulting kinematics | More expensive and less developed software                                                  |
| Can be validated against external force measurements             | Invasive for direct internal measurements (muscle,  ligament, or bone forces)               |

<br>

---
<font size="+7" color="orange"><center> Inverse Dynamics </center></font>  
--- 

- **Definition:** Inverse dynamics is the process of deriving the kinetics (i.e., forces and moments of force) necessary to produce the kinematics (observed motion) of bodies with known inertial properties (i.e., mass and moment of inertia).
   
   
- **Purpose:** Allows the calculation of the internal forces and moments when external forces are known 


- **Calculation (Simplified Version):**
  - First, divide body into kinematic linked chains
  - Next, divide chains into segments
  - Assume that each segment is a “rigid body”
  - Assume that each joint is rotationally frictionless