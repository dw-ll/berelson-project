<Navbar
              className="navbar-header no-shadows"
              theme="dark"
              light
              expand="md"
            >
              <NavbarBrand href="/#/">{" The Berelson Project"}</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/archive">Archive</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/dw-ll/Berelson-Project">
                    GitHub
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#/tree">Tree</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
            <ScrollButton
              targetId={"app"}
              behavior={"smooth"}
              buttonBackgroundColor={"white"}
              buttonColor={"black"}
              iconType={"arrow-up"}
            />

            <div>
              <Line />
            </div>

            <MDBFooter
              class="fixed-bottom"
              color="grey"
              className="footer font-small pt-4 mt-4"
            >
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                  <MDBCol md="4">
                    <h5 className="title">The Berelson Project</h5>
                    <p>
                      An ancestral site built to display and document the
                      Berelson lineage in an archival effort.
                    </p>
                  </MDBCol>
                  <MDBCol md="4">
                    <h5 className="title">Explore</h5>
                    <ul>
                      <li className="list-unstyled">
                        <a href="/archive">Archive</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="/tree">Family Tree</a>
                      </li>
                    </ul>
                  </MDBCol>
                  <MDBCol md="4">
                    <h5 className="title">Contact</h5>
                    <ul>
                      <li className="list-unstyled">
                        <p>
                          <i class="fas fa-home  mr-3"></i> Santa Cruz, CA
                          95062, US
                        </p>
                      </li>
                      <li className="list-unstyled">
                        <p>
                          <i class="fas fa-envelope mr-3"></i> Email
                        </p>
                      </li>
                      <li className="list-unstyled">
                        <p>
                          <i class="fas fa-phone mr-3"></i> Phone
                        </p>
                      </li>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()}
                </MDBContainer>
              </div>
            </MDBFooter>