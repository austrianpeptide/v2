---
title: Austrian Peptide Symposium
layout: conference
---

{% capture container_main %}
<!-- MAIN SECTION -->
# 11th Austrian Peptide Symposium

Date: 1st of December, 2022

Location: Vienna, Austria

Welcome to the 11th Austrian Peptide Symposium, organized by the Austrian Peptide Community under the auspices of the European Peptide Society. Join us for a day of inspiring talks and presentations.
<!-- END MAIN SECTION -->
{% endcapture %}

{% capture container_info %}
<!-- INFORMATION SECTION -->
## Information
### Abstract submission deadline
November 10th, 2022

### Symposium topics
- Peptide Chemistry and Synthesis
- Peptide Drug Development and Delivery
- Peptide Structural Biology
- Peptide Pharmacology

### Location
The 11th Austrian Peptide Symposium will be held in Van-Swieten conference hall, Van Swieten-Gasse 1a, 1090 Vienna.

![Van Swieten Hall Map](/assets/images/vsplan.gif)

![Van Swieten Hall Picture](/assets/images/vspic.jpg)

### Further information
The meeting will be held under the auspices of the European Peptide Society (EPS). To be become a member of the EPS (free-of-charge), please [click here](https://www.eurpepsoc.com/benefits-of-membership/).

Download the reports from the [2011-2016](https://www.meduniwien.ac.at/pharmakologie/ms/Report_AtPS2011-2016.pdf) and the [2017](https://www.meduniwien.ac.at/pharmakologie/ms/Report_AtPS2017.pdf) meetings.

Download the reports from the [2021](https://austrianpeptides.org/assets/report2021.pdf) meeting.

Download a report about [Peptide Science in Austria](https://www.meduniwien.ac.at/pharmakologie/ms/Peptide%20Science%20in%20Austria.pdf).

Further information to our meetings can be found in the [EPS newsletters](https://www.eurpepsoc.com/eps-newsletter-archive/).

![EPS Logo](https://www.meduniwien.ac.at/pharmakologie/ms/epslogo.gif)

<!-- END INFORMATION SECTION -->
{% endcapture %}

{% capture container_registration %}
<!-- MAIN SECTION -->
## Registration
Registration is currently closed.
<!-- Ready to join us at the symposium? Click the button below to register: -->

<!-- [Register Now](/registration) -->
<!-- END MAIN SECTION -->
{% endcapture %}


<div class="container container-main" id="home">
  {{ site.data.content.page.main | markdownify }}
</div>

<div class="container container-speakers" id="speakers">
  <h2>Speakers</h2>
  <div id="speaker-list">
  {% for speaker in site.data.content.speakers %}
    {% include speaker-card.html speaker=speaker %}
  {% endfor %}
  </div>
</div>

<div class="container container-info" id="information">
  {{ site.data.content.page.information | markdownify }}
</div>

<div class="container container-registration" id="registration">
  {{ container_registration | markdownify }}
</div>

<div class="container container-sponsors">
  <h2>Sponsors</h2>
  <div id="sponsor-list">
  {% for sponsor in site.data.content.sponsors %}
    {% include sponsor-card.html sponsor=sponsor %}
  {% endfor %}
  </div>
</div>

<div class="container container-contact" id="contact">
	{{ site.data.content.page.contact | markdownify }}
</div>
