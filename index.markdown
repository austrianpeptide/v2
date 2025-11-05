---
title: Austrian Peptide Symposium
layout: conference
---

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
  <h2>Registration</h2>
  {% if site.data.content.page.registration == 'open' %}
    <div>
      Ready to join us at the symposium? Click the button below to register:
    </div>

    <a href="https://physiologie-pharmakologie.meduniwien.ac.at/ueber-uns/events/14th-austrian-peptide-symposium/atps-registration/">Register Now</a>
  {% elsif site.data.content.page.registration == 'no_abstract' %}
    <div>
      Ready to join us at the symposium? Click the button below to register:
    </div>

    <a href="https://myconference.dev/atps_register.html">Register Now</a>
  {% else %}
    <div>Registration is closed.</div>
  {% endif %}
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
