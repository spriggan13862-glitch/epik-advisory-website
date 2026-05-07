// Shared footer for Epik Advisory inner pages
(function(){
  var html = '<footer>'
    + '<div class="footer-main">'
      + '<div class="footer-brand">'
        + '<img src="uploads/epik-logo-trimmed.png" alt="Epik Advisory"/>'
        + '<p>Fractional CFO, acquisition support, SEC readiness, and financial systems for founders, operators, and investors.</p>'
        + '<div class="fc"><svg viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>+1 610-764-3076</div>'
        + '<div class="fc"><svg viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>mmalriat@epik-advisory.com</div>'
        + '<div class="fc"><svg viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>New York, New York</div>'
      + '</div>'
      + '<div class="footer-col">'
        + '<h4>Navigation</h4>'
        + '<a href="index.html">Home</a>'
        + '<a href="capabilities.html">Capabilities</a>'
        + '<a href="about.html">About</a>'
        + '<a href="insights.html">Insights</a>'
        + '<a href="contact.html">Contact</a>'
      + '</div>'
      + '<div class="footer-col">'
        + '<h4>Services</h4>'
        + '<a href="capabilities.html#cfo">Fractional CFO</a>'
        + '<a href="capabilities.html#transaction">Transaction &amp; Acquisition</a>'
        + '<a href="capabilities.html#sec">SEC &amp; Public Company</a>'
        + '<a href="capabilities.html#systems">Financial Systems</a>'
        + '<a href="https://www.linkedin.com/company/epik-advisory" target="_blank" rel="noopener" style="margin-top:14px;color:var(--gold)">→ Follow on LinkedIn</a>'
      + '</div>'
    + '</div>'
    + '<div class="footer-bottom">'
      + '<span>© 2026 Epik Advisory. All rights reserved.</span>'
      + '<div class="footer-links">'
        + '<a href="privacy.html">Privacy Policy</a>'
        + '<a href="terms.html">Terms &amp; Conditions</a>'
      + '</div>'
    + '</div>'
  + '</footer>';

  document.write(html);

  // Scroll fade-up animation
  document.addEventListener('DOMContentLoaded', function(){
    var els = document.querySelectorAll('.fade-up');
    if (!els.length) return;
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, {threshold: 0.08});
    els.forEach(function(el){ obs.observe(el); });
  });
})();
