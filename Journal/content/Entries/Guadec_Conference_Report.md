+++
author = ""
title = "Guadec Conference Report 2019"
date = "2019-08-29"
description = "Guadec Conference Report 2019"
tags = ["Codethink", "2019"]
categories = ["Work"]
series = ["University Journal"]
aliases = ["migrate-from-jekyl"]
+++

Conference Report for GUADEC 2019


Last week I attended GUADEC (GNOME Users And Developers European Conference). My motivation for attending was to find open-source projects to get involved in that are more closely related to medical engineering, and more specifically prosthetics and orthotics. Additionally, it was to find opportunities to get more involved in the GNOME community as a whole. Both of these goals were achieved as I was able to get contact information for open-source prosthetics projects as well as find open-source applications and products that would be able to aid me in my doctorate.

For information on open-source prosthetics projects see:  

* https://openprosthetics.org/ 
* https://www.openbionics.org/ 
* http://www.openhandproject.org/

I was able to attend the majority of talks and have added notes on those that I attended below.  

---
<font size="+7" color="orange"><center> Day 1 </center></font>  

--- 

#  

> # <mark>Setting a Postive Voice for GNOME (non-technical)</mark>
> By **Britt Yazel**, a PhD doctoral candidate in neuroscience at UC Davis: **<https://www.brittyazel.com/>**
>
> Overall the talk was interesting and Britt was an engaging speaker. I found it to be a helpful introduction to the conference.   
>
> The main theme of the presentation was the level and manner of engagement from the GNOME community to criticise/compliment new features.  
>
> I found it interesting that Britt highlighted the difference in cost between OSS and CSS, where the reputation of a contributor whose name is public in on the line rather than the profits of a company only seen as a collective.  
>
> OSS companies have a much more "human" face to them than tech companies producing paid software.  
>
> While the transparent, communal structure of the GNOME community is a massive positive, measures need to be put in place to prevent toxic behaviour.   

#  

> # <mark>Gitlab: a year in review (non-technical)</mark>
> 
> Sri highlighted changes made to Gitlab recently including improved CI and pipelining features
> 
> - Multi-pipelining features have been added
> - Shell extensions have been moved to Gitlab
> 
> During the Q and A session, some suggestions were made for future features to be added:
> 
> - Replace tarballs with milestones and associate bugs and features to these milestones, to differentiate between releases more clearly
> - Have a greater focus on unit-testing to try and improve the quality of any merged content
> 
> The talk itself was interesting to begin with however lacked any real direction at times, with the aim to receive ideas and feedback more than to present much information. 
> 
> The debate between tarballs and implementing a new milestone-based approach for releases was the most productive of the suggestions made, with everyone seeming on-board with the idea. 
 

#  

> # <mark>GNHOME AUTTOMQATION	(technical)</mark>
> By **Nathan Willis**, a PhD candidate in Typography and Graphic Communication.
>
> Unfortunately, some technical issues before and during the presentation meant it was cut short and the slides couldn't be displayed correctly. 
>
> Nathan had included a list of devices and associated events he has implemented within his home, as well as events he was unable to get functional. 
>
> In my opinion it was one of the most interesting presentations at the conference though incomplete.     
>
> The theme of the talk was to present existing methods to use the Linux Desktop in home automation and the current short-comings of the platform in this area.
>
> He used the Home Assistant platform, sending MQTT messages between a Home Assistant server and a GNOME desktop.
>
> The session state, application notifications, system status etc could be used in home automation scenarios through the use of scenes.  

#  

> # <mark>Hack: Embedding Learning Tools in the OS (technical)</mark>
> By **Meg Ford** and **Manuel Quiñones**, software engineers at Pixability and Endless
>
> The theme of the talk was to present Hack, a GNOME-based project that helps kids to learn how to code
> 
> I found this presentation to be extremely disappointing as it was essentially a sales-pitch and very poorly presented. 
>
> The product itself is closed-source and currently requires the purchase of a laptop pre-loaded with Endless OS. 
>
> However, the concept itself and the tools used to produce a game-based learning experience came across as competently produced pieces of work.  

#  

> # <mark>Help I'm Falling in Love with Flatpak (technical)</mark>
> By **Richard Brown**
>
> This presentation was disappointing for the reason that its title was very misleading, with the use of Flapak in app-implementation only mentioned sparingly at the end of the presentation. 
>
> The theme of the talk was openSUSE MicroOS, an operating system based off of openSUSE Tumbleweed.
>
> - It is able to provide super-fast updates (4 or 5 times a week)
> - Uses OpenQA for testing
> - The system patches/updates while it is running and can be rolled back and these features are carried out using snapper to create new target snapshots and zypper to update the system in the snapshot and set it as the new default
> - The update doesn't modify the root file system and requires no backup snapshots as the system can be rolled back to a previous state.  

#  

> # <mark>GNU Health: The Fight for our Rights in the Public Health System (non-technical)</mark>
> By **Dr Luis Falcon M.D.**, founder of GNU Solidario
>
> As someone interested in engineering applications within the health sector, I had high expectations for this presentation that were ultimately unmet. 
>
> Dr Falcon didn't really give any explanation as to how the 3 systems provided by GNU Health actually work:
>
> - Electronic Medical Record (EMR) 
> - Hospital Management (HMIS) 
> - Health Information System (HIS)
>
> Furthermore, questions on the security of patient data within an open-source environment were unanswered or brushed aside with comments such as "the benefits outweigh the drawbacks". 
>
> The theme of the talk was an open-source project for public and private healthcare institutions to promote data sharing and the use of open-source management tools.  

---
<font size="+7" color="orange"><center> Day 2 </center></font>  

---   

> # <mark>Building the GNOME Community in Africa</mark>
> By **StellaMaris Njage** and **Sigu Magwa**, software developers at Sokowatch and Podii
>
> The presentation began with dancing and selfies, which definitely engaged everyone immediately.
>
> In terms of content, the presentation was quite short and Sigu was asking for advice on improving methods of engagement and GNOME community involvement in Kenya.
>
> They both detailed efforts that are currently ongoing to try and introduce GNOME to Africans, particularly Kenyans, and why it has been difficult to keep people's interest for long periods.
>
> Sigu explained his background in programming and their shared experiences in trying to get people interested in programming in general.
>
> The largest obstacle to overcome to grow the GNOME community in Kenya is the lack of clear direction towards a career in which they are financially secure.  

#  
 

> # <mark>Freedesktop-sdk Status Update and Future Plans</mark>
> By **Valentin David** and **Adam Jones**, software developers at Codethink.
>
> The presentation was interesting, and both Adam and Valentin did a great job. 
>
> As it was an explanation of new features rather than an introduction to Freedesktop-sdk, I wasn't able to keep up much beyond the introduction to the talk.
>
> But really well done guys!  

#  

> # <mark>Modernizing Desktop Linux Development with Containers</mark>
> By **Christian Hergert**, Principal Software Engineer at Red Hat.
>
> This was one of the better presentations as the slides were clear and the speaker explained the reason behind the project very well. 
>
> In the past, there has been a steep learning curve for newcomers to contribute to the Linux Desktop.
>
> Fragmentation due to different OS Systems meant that:
>
> - Debugging was impossible
> - There was incompatibility across different applications
> - There was a lack of training materials
>
> GNOME has been created the Builder IDE to make it easier to contribute to the Linux Desktop by:
>
> - Setting up build environments
> - Providing guidance to newcomers
> - Supporting multiple programming languages
> 
> Christian explained how a newcomer can now use Builder to start contributing with a single click, but that the debuggers, profilers and terminals have continued to run as needed to use advanced developer features.  

#  

> # <mark>Maintaining a Flatpak Repository</mark>
> By **Alexander Larsson**, Software Developer at Red Hat.
>
> I found the first part of this presentation very easy to follow, and the second half quite confusing.
>
> Alexander introduced the concept of OSTree, diagramatically explaining its close resemblance to git and explaining it's "basically git for operating systems".
>
> He explained the importance of Refs and Summary files, and how static delta can be used to trace commits back.
>
> For Flatpak he explained that
>
> - Each install has a repo
> - Apps and runtimes are branches
> - They are deployed next to the repo
> - The deployed directory name is the commit ID
>
> Beyond the introduction, it became difficult to follow how hosting a Flatpak repository worked.

---
<font size="+7" color="orange"><center> Day 3 </center></font>  

---  

> # <mark>Accessibility Features for Mutter/Gnome Shell on Wayland</mark>
> By **Oliver Fourdan**, Senior Software Engineer in the Graphics Subsystem team at Red Hat.
>
> The presentation involved a demonstration of various accessibility tools on Wayland and an explanation of the improvements that had been made on previous features.
>
> Oliver was able to explain two types of accessibility features:
>
> - Keyboard accessibility
> - Mouse accessibility
>
> The keyboard accessibility features included:
> 
> - Slow Keys: Allow the user to specify the duration for which they must press and hold a key before it is registered.
> - Bounce Keys: Allows the computer to ignore rapid, repeated keypresses of the same key.
> - Sticky Keys: Allows the user to complete combination keyboard commands without having to press several keys at once.
> - Mouse Keys: Using the keyboard to navigate instead of a mouse.
>
> The mouse accessibility features included:
> 
> - Simulated second click: Using the left click as both a left and right click. 
> - Hover click: By hovering the mouse for a certain duration, it will perform a left click.
> - Pointer location: Allowing the pointer location to be clearly identified.
>
> And he was able to show its implementation within the desktop bar, showing a reduction in the applets footprint. 

#  

> # <mark>Designing GNOME Mobile Apps</mark>
> By **Tobias Bernard**, Interaction Designer at Purism.
>
> I forgot to take notes on this due to the sheer enthusiasm and joy that Tobias showed when demonstrating the new features of GNOME for mobile.
>
> The primary purpose of the teams work has been to optimise menus, scrolling and window resizing for the Librem 5 phone.

---
<font size="+7" color="orange"><center> Final comments </center></font>  

---  

Just as a final note, the conference was a wonderful experience that offered many networking opportunities and the chance for me to engage with professionals who offered great advice on how to continue my development outside of codethink.