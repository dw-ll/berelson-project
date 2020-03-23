import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import { Switch } from "react-router";
import { useSelector, useDispatch, connect } from "react-redux";

import { LinkContainer } from "react-router-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import Context from "../Context";
import HenryP from "../profiles/component/people/pre_henry.jsx";
import David from "../profiles/component/people/pre_david.jsx";
import JackPost from "../profiles/component/people/post_jack.jsx";
import RivaPost from "../profiles/component/people/post_riva.jsx";
import Missing from "../Media/missing_profile.jpg";
import Chana from "../Media/Pre-WWII/Chana.Fodeman025.jpeg";
import DavidB from "../Media/Pre-WWII/David.Baigelman016.jpeg";
import Henry from "../Media/Post-WWII 2/Henry.Baigelman119.jpeg";
import HenryResults from "./HenryResults.js";
import Riva from "../Media/Modern/Riva346.jpeg";
import Jack from "../Media/Post-WWII 2/Jack.Baigelman057.jpeg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Results from "./Results.jsx";
import searchData from "../json/searchData.js";
import resultData from "../json/resultData.js";
import MusicDock from "./MusicDock.js";
import "bootstrap/dist/css/bootstrap.css";

require("bootstrap");

const FamilyTree = props => {
  console.log(props);
  const darkValue = props.dark;
  const [open, setOpen] = useState(false);
  const [davidOpen, setDavidOpen] = useState(false);
  const [jackOpen, setJackOpen] = useState(false);
  const [jackDarkModeOpen, setJackDarkModeOpen] = useState(false);
  const [rivaOpen, setRivaOpen] = useState(false);
  console.log(darkValue);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDavidOpen = () => {
    setDavidOpen(true);
  };
  const handleDavidClose = () => {
    setDavidOpen(false);
  };

  const handleJackClose = () => {
    setJackOpen(false);
  };
  const handleRivaOpen = () => {
    setRivaOpen(true);
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/pre/henry"
          exact
          render={() => {
            return <HenryP />;
          }}
        />
        <Route
          path="/pre/david"
          exact
          render={() => {
            return <David />;
          }}
        />
        <Route
          path="/post/jack"
          exact
          render={() => {
            return <JackPost />;
          }}
        />
        <Route
          path="/post/riva"
          exact
          render={() => {
            return <RivaPost />;
          }}
        />
        <Route
          path="/results/henry"
          exact
          render={() => {
            return <HenryResults />;
          }}
        />

        <div class="top">
          <div>
            <h4>Berelson Family Tree</h4>
            <h6>Explore and learn more about the Berelson ancestry.</h6>
          </div>
          <MusicDock />
          <div class="tree-wrapper overflow-hidden">
            <div class="tree">
              <ul>
                <li>
                  <a className="inactive" href="# ">
                    <img alt="" class="tree-profile" src={Missing} />
                    <div class="tree-info">Koppel</div>
                  </a>
                  <a className="inactive" href="# ">
                    <img alt="" class="tree-profile" src={Chana} />
                    <div class="tree-info">Chana Fodeman</div>
                  </a>
                  <ul>
                    <li>
                      <a className="inactive" href="# ">
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Pinchas</div>
                      </a>

                      <a className="inactive" href="# ">
                        Katz
                      </a>
                      <ul>
                        <li>
                          <a className="inactive" href="# ">
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Abram</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Brother</div>
                          </a>
                          <ul>
                            <li>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Michael</div>
                              </a>
                              <ul>
                                <li>
                                  <a className="inactive" href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Married</div>
                                  </a>
                                  <a className="inactive" href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Putty</div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="inactive" href="# ">
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Freide</div>
                      </a>
                    </li>
                    <li>
                      <a className="inactive" href="# ">
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Pessel</div>
                      </a>
                    </li>
                    <li>
                      <a className="inactive" href="# ">
                        {" "}
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Rosa</div>
                      </a>
                    </li>
                    <li>
                      <a className="inactive" href="# ">
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Simon</div>
                      </a>
                      <a className="inactive" href="# ">
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Riva</div>
                      </a>

                      <ul>
                        <li>
                          <a onClick={handleDavidOpen} href="# ">
                            <img alt="" class="tree-profile" src={DavidB} />
                            <div class="tree-info">David</div>
                          </a>

                          <Modal
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={davidOpen}
                            onHide={() => setDavidOpen(false)}
                            className={
                              darkValue
                                ? "dark-mode modal-container"
                                : "modal-container"
                            }
                          >
                            <Modal.Header closeButton>
                              <Modal.Title
                                className="modal-body"
                                id="contained-modal-title-vcenter"
                              >
                                David Baigelman
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modal-body">
                              <img
                                alt=""
                                class="tree-profile-modal"
                                src={DavidB}
                              />
                              <h6>B.1900 D.1960</h6>
                              <p>
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros.
                              </p>
                            </Modal.Body>
                            <Modal.Footer className="modal-foot">
                              <Button onClick={handleDavidClose}>Close</Button>
                              <LinkContainer to="/pre/david">
                                <Button>Learn</Button>
                              </LinkContainer>
                              <LinkContainer to="/results/david">
                                <Button>Photos</Button>
                              </LinkContainer>
                            </Modal.Footer>
                          </Modal>

                          <a className="inactive" href="# ">
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Chana Federman</div>
                          </a>

                          <ul>
                            <li>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Dinchaz</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Chaya</div>
                          </a>
                          <ul>
                            <li>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Liebel</div>
                              </a>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Anja</div>
                              </a>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Shlameck</div>
                              </a>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Rose</div>
                              </a>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Lola</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a onClick={handleOpen} href="# ">
                            <img alt="" class="tree-profile" src={Henry} />
                            <div class="tree-info">Henry</div>
                          </a>

                          <Modal
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={open}
                            onHide={() => setOpen(false)}
                            className={
                              darkValue
                                ? "dark-mode modal-container"
                                : "modal-container"
                            }
                          >
                            <Modal.Header closeButton>
                              <Modal.Title
                                className="modal-body"
                                id="contained-modal-title-vcenter"
                              >
                                Henry Baigelman
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modal-body">
                              <img
                                alt=""
                                class="tree-profile-modal"
                                src={Henry}
                              />
                              <h6>B.1900 D.1960</h6>
                              <p>
                                Chaim (later: Henry) Baigelman was a violinist,
                                saxophonist and composer and the only one out of
                                nine musical siblings to survive the war. He was
                                a member of a family band, The Jolly Boys, which
                                he revived in post-war Germany under the name
                                The Happy Boys, playing jazz concerts for
                                American soldiers and Jewish survivors.
                              </p>
                            </Modal.Body>
                            <Modal.Footer className="modal-foot">
                              <Button onClick={handleClose}>Close</Button>
                              <LinkContainer to="/pre/henry">
                                <Button>Learn</Button>
                              </LinkContainer>
                              <LinkContainer to="/results/henry">
                                <Button>Photos</Button>
                              </LinkContainer>
                            </Modal.Footer>
                          </Modal>
                          <a className="inactive" href="# ">
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Greta Glazer</div>
                          </a>
                          <ul>
                            <li>
                              <a onClick={handleRivaOpen} href="# ">
                                <img alt="" class="tree-profile" src={Riva} />
                                <div class="tree-info">Riva</div>
                              </a>
                              <Modal
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={rivaOpen}
                                onHide={() => setRivaOpen(false)}
                                className={
                                  darkValue
                                    ? "dark-mode modal-container"
                                    : "modal-container"
                                }
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title
                                    className="modal-body"
                                    id="contained-modal-title-vcenter"
                                  >
                                    Riva
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="modal-body">
                                  <img
                                    alt=""
                                    class="tree-profile-modal"
                                    src={Riva}
                                  />
                                  <h6>B.1900 D.1960</h6>
                                  <p>
                                    Cras mattis consectetur purus sit amet
                                    fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum
                                    at eros.
                                  </p>
                                </Modal.Body>
                                <Modal.Footer className="modal-foot">
                                  <Button onClick={handleRivaOpen}>
                                    Close
                                  </Button>
                                  <LinkContainer to="/post/riva">
                                    <Button>Learn</Button>
                                  </LinkContainer>
                                  <LinkContainer to="/results/riva">
                                    <Button>Photos</Button>
                                  </LinkContainer>
                                </Modal.Footer>
                              </Modal>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">David Berelson</div>
                              </a>
                              <ul>
                                <li>
                                  <a className="inactive" href="# ">
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Serj</div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Simon</div>
                              </a>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Bahbi Fisher</div>
                              </a>
                              <ul>
                                <li>
                                  <a href="# ">
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Serj</div>{" "}
                                  </a>
                                  <a className="inactive" href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Dan Wagowski</div>
                                  </a>
                                  <ul>
                                    <li>
                                      <a className="inactive" href="# ">
                                        <img
                                          alt=""
                                          class="tree-profile"
                                          src={Missing}
                                        />
                                        <div class="tree-info">Eli</div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Aron</div>
                                  </a>
                                </li>
                                <li>
                                  <a className="inactive" href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Abby</div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Shlomo</div>
                          </a>
                        </li>

                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Rosa</div>
                          </a>
                          <a className="inactive" href="# ">
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Abram</div>
                          </a>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Raquel</div>
                          </a>
                          <ul>
                            <li>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Felicia</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Avram</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Chaina</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Chamon</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Eita</div>
                          </a>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Shmuel</div>
                          </a>
                          <ul>
                            <li>
                              <a onClick={setJackOpen} href="# ">
                                <img alt="" class="tree-profile" src={Jack} />
                                <div class="tree-info">Jack</div>
                              </a>
                              <Modal
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={jackOpen}
                                onHide={() => setJackOpen(false)}
                                className={
                                  darkValue
                                    ? "dark-mode modal-container"
                                    : "modal-container"
                                }
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title
                                    className="modal-body"
                                    id="contained-modal-title-vcenter"
                                  >
                                    Jack
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="modal-body">
                                  <img
                                    alt=""
                                    class="tree-profile-modal"
                                    src={Jack}
                                  />
                                  <h6>B.1900 D.1960</h6>
                                  <p>
                                    Cras mattis consectetur purus sit amet
                                    fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum
                                    at eros.
                                  </p>
                                </Modal.Body>
                                <Modal.Footer className="modal-foot">
                                  <Button onClick={handleJackClose}>
                                    Close
                                  </Button>
                                  <LinkContainer to="/post/jack">
                                    <Button>Learn</Button>
                                  </LinkContainer>
                                </Modal.Footer>
                              </Modal>
                              <Modal
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={jackDarkModeOpen}
                                onHide={() => setJackOpen(false)}
                                className={
                                  darkValue
                                    ? "dark-mode modal-container"
                                    : "modal-container"
                                }
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title
                                    className="modal-body"
                                    id="contained-modal-title-vcenter"
                                  >
                                    Jack
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="modal-body">
                                  <img
                                    alt=""
                                    class="tree-profile-modal"
                                    src={Jack}
                                  />
                                  <h6>B.1900 D.1960</h6>
                                  <p>
                                    Cras mattis consectetur purus sit amet
                                    fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum
                                    at eros.
                                  </p>
                                </Modal.Body>
                                <Modal.Footer className="modal-foot">
                                  <Button onClick={handleJackClose}>
                                    Close
                                  </Button>
                                  <LinkContainer to="/post/jack">
                                    <Button>Learn</Button>
                                  </LinkContainer>
                                </Modal.Footer>
                              </Modal>
                              <a className="inactive" href="# ">
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Rita Guttman</div>
                              </a>
                              <ul>
                                <li>
                                  <li>
                                    <a className="inactive" href="# ">
                                      {" "}
                                      <img
                                        alt=""
                                        class="tree-profile"
                                        src={Missing}
                                      />
                                      <div class="tree-info">Sandy</div>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="inactive" href="# ">
                                      <img
                                        alt=""
                                        class="tree-profile"
                                        src={Missing}
                                      />
                                      <div class="tree-info">Mark</div>
                                    </a>
                                    <a className="inactive" href="# ">
                                      <img
                                        alt=""
                                        class="tree-profile"
                                        src={Missing}
                                      />
                                      <div class="tree-info">Blaine</div>
                                    </a>
                                    <ul>
                                      <li>
                                        <a className="inactive" href="# ">
                                          {" "}
                                          <img
                                            class="tree-profile"
                                            src={Missing}
                                            alt=" "
                                          />
                                          <div class="tree-info">Mollie</div>
                                        </a>
                                      </li>
                                      <li>
                                        <a className="inactive" href="# ">
                                          {" "}
                                          <img
                                            class="tree-profile"
                                            src={Missing}
                                            alt=" "
                                          />
                                          <div class="tree-info">Nina</div>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="# ">
                                      {" "}
                                      <img
                                        alt=""
                                        class="tree-profile"
                                        src={Missing}
                                      />
                                      <div class="tree-info">Illana</div>
                                    </a>
                                  </li>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Avram</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="inactive" href="# ">
                        {" "}
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Leizer</div>
                      </a>
                      <a className="inactive" href="# ">
                        {" "}
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Ida</div>
                      </a>
                      <ul>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Shmuel</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Avram</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Chana</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Chava</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Sheindel</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="inactive" href="# ">
                        {" "}
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Maika</div>
                      </a>
                      <a className="inactive" href="# ">
                        {" "}
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Rochverg</div>
                      </a>
                      <ul>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Max</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Simon</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Phillip</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Chana</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Girl</div>
                          </a>
                        </li>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Girl</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="inactive" href="# ">
                        {" "}
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Yessel</div>
                      </a>
                      <a className="inactive" href="# ">
                        {" "}
                        <img alt="" class="tree-profile" src={Missing} />
                        <div class="tree-info">Paige Laufer</div>
                      </a>
                      <ul>
                        <li>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Yitzshak Baigelman</div>
                          </a>
                          <a className="inactive" href="# ">
                            {" "}
                            <img alt="" class="tree-profile" src={Missing} />
                            <div class="tree-info">Chana HS</div>
                          </a>
                          <ul>
                            <li>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Abram</div>
                              </a>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Bryndi</div>
                              </a>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Morris Rubenstein</div>
                              </a>
                              <ul>
                                <li>
                                  <a className="inactive" href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Sam</div>
                                  </a>
                                </li>
                                <li>
                                  <a className="inactive" href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Ben</div>
                                  </a>
                                  <a className="inactive" href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Rose</div>
                                  </a>
                                  <ul>
                                    <li>
                                      <a className="inactive" href="# ">
                                        {" "}
                                        <img
                                          alt=""
                                          class="tree-profile"
                                          src={Missing}
                                        />
                                        <div class="tree-info">Joan Boarch</div>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="inactive" href="# ">
                                        {" "}
                                        <img
                                          alt=""
                                          class="tree-profile"
                                          src={Missing}
                                        />
                                        <div class="tree-info">Mitch</div>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="inactive" href="# ">
                                        {" "}
                                        <img
                                          alt=""
                                          class="tree-profile"
                                          src={Missing}
                                        />
                                        <div class="tree-info">Dan</div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Esther</div>
                              </a>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Sherman</div>
                              </a>
                              <ul>
                                <li>
                                  <a className="inactive" href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Child</div>
                                  </a>
                                </li>
                                <li>
                                  <a className="inactive" href="# ">
                                    {" "}
                                    <img
                                      alt=""
                                      class="tree-profile"
                                      src={Missing}
                                    />
                                    <div class="tree-info">Child</div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Rivka</div>
                              </a>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Gottlieb</div>
                              </a>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Ethel</div>
                              </a>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Bond</div>
                              </a>
                            </li>
                            <li>
                              <a className="inactive" href="# ">
                                {" "}
                                <img
                                  alt=""
                                  class="tree-profile"
                                  src={Missing}
                                />
                                <div class="tree-info">Avram</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};
const mapStateToProps = state => {
  return state.dark;
};

export default withRouter(connect(mapStateToProps, null)(FamilyTree));
