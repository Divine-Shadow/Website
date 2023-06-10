class HeaderNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar dark navbar-fixed-top">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="ti-menu"></span>
                </button>
                <a class="navbar-brand" href="../index.html">
                  <img src="../img/logo-update.png" alt="Logo">
                </a>
              </div>
              <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="../index.html">Home</a></li>
                   <!-- <li><a href="../our-games.html">Our Games</a></li> -->
                    <li><a href="../contact.html">Contact</a></li>
                    <li><a href="../about.html">About</a></li>
                   <!-- <li><a href="../faq.html">FAQ</a></li> -->
                    <li><a href="javascript:void(0)" id="bookbutton" onclick="book()">Booking</a></li>
                </ul>
              </div><!--/.nav-collapse -->
            </div>
            </nav>
        `;
    }
}

customElements.define("header-nav", HeaderNav);