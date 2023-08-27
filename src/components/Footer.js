import React from "react"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit"

export default function Footer() {
    const today = new Date()
    const year = today.getFullYear()

    return (
        <MDBFooter className="bg-dark text-center text-white fixed-bottom">
          {/* <MDBContainer className="p-2 pb-0 pt-3">
            <section className="mb-2">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.facebook.com/"
                  role="button"
                >
                    <MDBIcon fab icon="facebook-f" />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/in/mardatilla-annisa-70b381195/"
                  role="button"
                >
                  <MDBIcon fab icon="linkedin-in" />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://github.com/YuzaAlaska"
                  role="button"
                >
                  <MDBIcon fab icon="github" />
                </a>
            </section>
          </MDBContainer> */}

          <div
            className="text-center p-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © {year} Copyright: Mardatilla Annisa
          </div>
        </MDBFooter>
    )
}