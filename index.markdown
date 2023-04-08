---
title: Austrian Peptide Symposium
layout: conference
---

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
