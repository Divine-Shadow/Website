class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer class="footer-1 steel-bg bg-dark" style="border-top: 4px solid #3E4248;">
              <div class="container">
              <div class="row">
                <div class="col-md-3 col-sm-6">
                     <div class="widget">
                     <h6 class="title">CONTACT</h6>
                        <hr>
                        <ul class="link-list recent-posts">
                          <li><i class="ti-mobile"> </i> 216-273-8000</li>
                        <li><i class="ti-email"> </i> info@billscrib.com</li>
                        </ul>
                     </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="widget">
                       <h6 class="title">Hours</h6>
                       <hr>
                       <ul class="link-list recent-posts">
                        <li>
                               Friday walk-ins <span class="date">5PM – 9PM</span>
                        </li>
                        <li>
                               Saturday walk-ins <span class="date">12PM – 9PM</span>
                        </li> 
                        <li>
                     Sunday-Thursday 12PM - 9PM avalible by online appointment only. <a href="contact.html#cForm"> Contact Us </a> for details
                        </li>
                        </ul>
                </div>
          <!--end of widget-->
                </div>
            <div class="col-md-3 col-sm-6">
            <div class="widget">
              <h6 class="title">Location</h6>
               <hr>
               <div class="twitter-feed">
               <div class="text-white">
                    <strong>Bill's Crib<br>
                        2515 Jay Avenue #B3<br>
                    Cleveland, OH 44113</strong><br><br>
                    <b> <a href="https://www.google.com/maps/place/Bill's+Crib/@41.486129,-81.7080355,17z/data=!3m1!4b1!4m5!3m4!1s0x8830f186a08ab477:0xbd13eaa13044b641!8m2!3d41.4860995!4d-81.7058258" target="_blank"><i class="ti-marker-map"></i>Get Directions</a></b>
               </div>
               </div>
            </div>
        <!--end of widget-->
            </div>
        <div class="col-md-3 col-sm-6" id="kayak">
            <div class="widget">
                 <h6 class="title">Our Friends and Affiliates</h6>
            <hr>
                 <ul class="link-list recent-posts">
                     <li> Looking for an Escape Room? Call us about our package deals with <a href="https://www.perplexitygames.com/"> Perplexity Games Escape Room </a></li>
                     <li> Get more ideas on what to do on the <a href=" https://www.kayak.com/Cleveland.4321.guide " > Cleveland Travel Guide</a> </li>
                </ul>
          </div>
          <!--end of widget-->
      </div>
</div>
<!--end of row-->
<div class="row">
    <div class="col-sm-6">
        <span class="sub">&copy; Copyright 2021 - billscrib.com</span>
    </div>
</div>
</div>
<!--end of container-->
<a class="btn btn-sm fade-half back-to-top inner-link" href="#top">Top</a>
</footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);
