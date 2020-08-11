import React, { useState } from 'react';
//import { Link } from '@reach/router'

const HomePage = () => {
  const [state, setState] = useState('<2%');
  return (
    <>
      <div class="bg-light pt-5 w-100 ">
        <h1 class="text-success ">HEMPTHENATION</h1>
        <p class="lead mt-3 container">
          Our Full Spectrum 5% natural CBD+CBDA In MCT carrier Oil contains
          {state} THC Legal Limit, with a minimum of 5% of CBD per 10ml bottle.
          <br />
          We prefer a full spectrum extract because it also contains the 100+
          health-promoting compounds found in hemp alongside CBD, including a
          range of other beneficial cannabinoids like CBDA, terpenes, omega
          3-6-9 healthy fats and flavonoids.
        </p>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a class="btn btn-success btn-lg" href="#" role="button">
          Learn more
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,64L40,53.3C80,43,160,21,240,48C320,75,400,149,480,186.7C560,224,640,224,720,192C800,160,880,96,960,74.7C1040,53,1120,75,1200,106.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div class="homeBg">
        <div class="row">
          <div class="col-lg-3 m-2 mx-auto responsive">
            <div class="card">
              <img
                src={require('../assets/Oil.png')}
                class="card-img-top "
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title ">Card title</h5>
                <p class="card-text ">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 m-2 mx-auto responsive">
            <div class="card">
              <img
                src={require('../assets/Oil.png')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title ">Card title</h5>
                <p class="card-text ">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-warning">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 m-2 mx-auto responsive">
            <div class="card">
              <img
                src={require('../assets/Oil.png')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-success">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 m-2 mx-auto responsive">
            <div class="card">
              <img
                src={require('../assets/Oil.png')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" class="btn btn-danger">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>{' '}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fill-opacity="1"
            d="M0,64L34.3,53.3C68.6,43,137,21,206,64C274.3,107,343,213,411,213.3C480,213,549,107,617,85.3C685.7,64,754,128,823,165.3C891.4,203,960,213,1029,224C1097.1,235,1166,245,1234,234.7C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default HomePage;
