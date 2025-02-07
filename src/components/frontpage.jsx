import React from "react";
// import Navbar from "./Navbar";
function Frontpage() {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Icon grid</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-11a7 7 0 0 0-6.94 7.82c.43.37.76.86.98 1.4.34-.26.78-.42 1.26-.42.6 0 1.16.27 1.57.73A3.001 3.001 0 0 1 11 9.84c.55-.37 1.21-.6 1.94-.6.42 0 .84.07 1.21.2-.34-1.29-1.32-2.27-2.6-2.6a5.006 5.006 0 0 1-4.3-7.56 7 7 0 0 0-1.42.38A7 7 0 0 0 8 1zm4.31 1.26a5 5 0 0 1-.92 2.44 1.988 1.988 0 0 1-2.67-.5 4.992 4.992 0 0 1 .5-6.73A5 5 0 0 1 12.31 2.26zM6.73 4a4.992 4.992 0 0 1-3.17 6.92 1.994 1.994 0 0 1 .5-2.67 5 5 0 0 1 6.72-.5 4.992 4.992 0 0 1-4.05 2.94z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-11a7 7 0 0 0-6.94 7.82c.43.37.76.86.98 1.4.34-.26.78-.42 1.26-.42.6 0 1.16.27 1.57.73A3.001 3.001 0 0 1 11 9.84c.55-.37 1.21-.6 1.94-.6.42 0 .84.07 1.21.2-.34-1.29-1.32-2.27-2.6-2.6a5.006 5.006 0 0 1-4.3-7.56 7 7 0 0 0-1.42.38A7 7 0 0 0 8 1zm4.31 1.26a5 5 0 0 1-.92 2.44 1.988 1.988 0 0 1-2.67-.5 4.992 4.992 0 0 1 .5-6.73A5 5 0 0 1 12.31 2.26zM6.73 4a4.992 4.992 0 0 1-3.17 6.92 1.994 1.994 0 0 1 .5-2.67 5 5 0 0 1 6.72-.5 4.992 4.992 0 0 1-4.05 2.94z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-11a7 7 0 0 0-6.94 7.82c.43.37.76.86.98 1.4.34-.26.78-.42 1.26-.42.6 0 1.16.27 1.57.73A3.001 3.001 0 0 1 11 9.84c.55-.37 1.21-.6 1.94-.6.42 0 .84.07 1.21.2-.34-1.29-1.32-2.27-2.6-2.6a5.006 5.006 0 0 1-4.3-7.56 7 7 0 0 0-1.42.38A7 7 0 0 0 8 1zm4.31 1.26a5 5 0 0 1-.92 2.44 1.988 1.988 0 0 1-2.67-.5 4.992 4.992 0 0 1 .5-6.73A5 5 0 0 1 12.31 2.26zM6.73 4a4.992 4.992 0 0 1-3.17 6.92 1.994 1.994 0 0 1 .5-2.67 5 5 0 0 1 6.72-.5 4.992 4.992 0 0 1-4.05 2.94z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-11a7 7 0 0 0-6.94 7.82c.43.37.76.86.98 1.4.34-.26.78-.42 1.26-.42.6 0 1.16.27 1.57.73A3.001 3.001 0 0 1 11 9.84c.55-.37 1.21-.6 1.94-.6.42 0 .84.07 1.21.2-.34-1.29-1.32-2.27-2.6-2.6a5.006 5.006 0 0 1-4.3-7.56 7 7 0 0 0-1.42.38A7 7 0 0 0 8 1zm4.31 1.26a5 5 0 0 1-.92 2.44 1.988 1.988 0 0 1-2.67-.5 4.992 4.992 0 0 1 .5-6.73A5 5 0 0 1 12.31 2.26zM6.73 4a4.992 4.992 0 0 1-3.17 6.92 1.994 1.994 0 0 1 .5-2.67 5 5 0 0 1 6.72-.5 4.992 4.992 0 0 1-4.05 2.94z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-11a7 7 0 0 0-6.94 7.82c.43.37.76.86.98 1.4.34-.26.78-.42 1.26-.42.6 0 1.16.27 1.57.73A3.001 3.001 0 0 1 11 9.84c.55-.37 1.21-.6 1.94-.6.42 0 .84.07 1.21.2-.34-1.29-1.32-2.27-2.6-2.6a5.006 5.006 0 0 1-4.3-7.56 7 7 0 0 0-1.42.38A7 7 0 0 0 8 1zm4.31 1.26a5 5 0 0 1-.92 2.44 1.988 1.988 0 0 1-2.67-.5 4.992 4.992 0 0 1 .5-6.73A5 5 0 0 1 12.31 2.26zM6.73 4a4.992 4.992 0 0 1-3.17 6.92 1.994 1.994 0 0 1 .5-2.67 5 5 0 0 1 6.72-.5 4.992 4.992 0 0 1-4.05 2.94z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-11a7 7 0 0 0-6.94 7.82c.43.37.76.86.98 1.4.34-.26.78-.42 1.26-.42.6 0 1.16.27 1.57.73A3.001 3.001 0 0 1 11 9.84c.55-.37 1.21-.6 1.94-.6.42 0 .84.07 1.21.2-.34-1.29-1.32-2.27-2.6-2.6a5.006 5.006 0 0 1-4.3-7.56 7 7 0 0 0-1.42.38A7 7 0 0 0 8 1zm4.31 1.26a5 5 0 0 1-.92 2.44 1.988 1.988 0 0 1-2.67-.5 4.992 4.992 0 0 1 .5-6.73A5 5 0 0 1 12.31 2.26zM6.73 4a4.992 4.992 0 0 1-3.17 6.92 1.994 1.994 0 0 1 .5-2.67 5 5 0 0 1 6.72-.5 4.992 4.992 0 0 1-4.05 2.94z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-11a7 7 0 0 0-6.94 7.82c.43.37.76.86.98 1.4.34-.26.78-.42 1.26-.42.6 0 1.16.27 1.57.73A3.001 3.001 0 0 1 11 9.84c.55-.37 1.21-.6 1.94-.6.42 0 .84.07 1.21.2-.34-1.29-1.32-2.27-2.6-2.6a5.006 5.006 0 0 1-4.3-7.56 7 7 0 0 0-1.42.38A7 7 0 0 0 8 1zm4.31 1.26a5 5 0 0 1-.92 2.44 1.988 1.988 0 0 1-2.67-.5 4.992 4.992 0 0 1 .5-6.73A5 5 0 0 1 12.31 2.26zM6.73 4a4.992 4.992 0 0 1-3.17 6.92 1.994 1.994 0 0 1 .5-2.67 5 5 0 0 1 6.72-.5 4.992 4.992 0 0 1-4.05 2.94z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-11a7 7 0 0 0-6.94 7.82c.43.37.76.86.98 1.4.34-.26.78-.42 1.26-.42.6 0 1.16.27 1.57.73A3.001 3.001 0 0 1 11 9.84c.55-.37 1.21-.6 1.94-.6.42 0 .84.07 1.21.2-.34-1.29-1.32-2.27-2.6-2.6a5.006 5.006 0 0 1-4.3-7.56 7 7 0 0 0-1.42.38A7 7 0 0 0 8 1zm4.31 1.26a5 5 0 0 1-.92 2.44 1.988 1.988 0 0 1-2.67-.5 4.992 4.992 0 0 1 .5-6.73A5 5 0 0 1 12.31 2.26zM6.73 4a4.992 4.992 0 0 1-3.17 6.92 1.994 1.994 0 0 1 .5-2.67 5 5 0 0 1 6.72-.5 4.992 4.992 0 0 1-4.05 2.94z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Featured title
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active carousel-item-start">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="300px"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="300px"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p className="opacity-75">
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item-next carousel-item-start">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="300px"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="300px"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="300px"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect
                width="100%"
                height="300px"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Frontpage;
