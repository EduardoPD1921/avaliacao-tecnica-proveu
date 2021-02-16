import React from 'react'

const Footer = props => {
    return (
        <footer class="page-footer teal lighten-2">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Avaliação técnica</h5>
                <p class="grey-text text-lighten-4">Feito com muito carinho por: Eduardo Gomes Heleno</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/EduardoPD1921">Github</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/eduardo-gomes-heleno-a16b4b1aa/">Linkedin</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://twitter.com/duardoheleno">Twitter</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/eduardo_gomes_heleno/">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021 Copyright Text
            </div>
          </div>
        </footer>
    )
}

export default Footer