import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <div class="row bg-light text-center ">
        <div class="col-md-12 mx-auto ">
          <ul class="list-inline text-center ">
            <li class="list-inline-item items">
              <a href="mailto:contact@hempthenation.com">
                <span class="fa-stack fa-lg m-2">
                  <i class="fas fa-circle fa-stack-2x text-warning "></i>
                  <i class="far fa-envelope fa-stack-1x fa-inverse"></i>
                </span>
                <span class="fa-stack fa-lg m-2">
                  <i class="fas fa-circle fa-stack-2x text-primary "></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse text-white"></i>
                </span>
                <span class="fa-stack fa-lg m-2">
                  <i class="fas fa-circle fa-stack-2x text-danger "></i>
                  <i class="fab fa-instagram fa-stack-1x fa-inverse text-warning"></i>
                </span>
                <span class="fa-stack fa-lg m-2">
                  <i class="fas fa-circle fa-stack-2x text-primary "></i>
                  <i class="fab fa-facebook fa-stack-1x fa-inverse text-white"></i>
                </span>
              </a>
            </li>
          </ul>
          <ul className="list">
            <li class="copyright text-muted ">
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>
              2020
              <Link className="items " to="/">
                {' '}
                | Hempthenation.com
              </Link>{' '}
              | All rights reserved
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 1rem;
    color: var(--mainWhite);
  }
`;

export default Footer;
