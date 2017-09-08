
<script type="text/html" id="hit-template">
  <div class="hit">
    <div class="description body-text hit-content">
        <h1 class="heading hit-name">{{{_highlightResult.name.value}}}</h1>
        <div class="header-description">
            <p class="uppercase">
              <strong>
                <span class="hit-country uppercase">{{{_highlightResult.country.value}}}</span>, <span class="hit-state">{{{_highlightResult.state.value}}}</span>
              </strong>
            </p>
            <p class="hit-location"><strong>
              <span class="hit-location">{{location}}</span>,
              <span class="hit-suburb">{{{_highlightResult.suburb.value}}}</span>,
              <span class="hit-postcode">{{{_highlightResult.postcode.value}}}</span>.
              Time: <span class="hit-time">{{time}}</span></strong></p>
            <p class="">{{description}}</p>
            <p><a class="hit-url" href="{{url}}" target="_blank">More details about this event &rarr;</a></p>
        </div>
    </div>

    <br><hr><br>
  </div>
</script>


<script type="text/html" id="no-results-template">
  <div id="no-results-message">
    <p>There are no <em>"{{query}}"</em> events yet.<br>
    More events are being added so check again soon.</p>
    <a href="." class='clear-all'>Clear search</a>
  </div>
</script>