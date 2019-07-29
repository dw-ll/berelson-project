import React, { createRef, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import Tree from "react-d3-tree";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import Missing from "../../Media/missing_profile.jpg";
import Chana from "../../Media/Pre-WWII/Chana.Fodeman025.jpeg";
import Abram from "../../Media/Abram.Baigelman040.pdf";
import DavidB from "../../Media/Pre-WWII/David.Baigelman016.jpeg";
import Henry from "../../Media/Post-WWII 2/Henry.Baigelman119.jpeg";
import Riva from "../../Media/Modern/Riva346.jpeg";
import Jack from "../../Media/Post-WWII 2/Jack.Baigelman057.jpeg";

class FamilyTree extends Component {
  constructor(props) {
    super(props);
    this.topRef = createRef(); // Create a ref object
  }
  componentDidMount() {
    this.topRef.current.scrollIntoView({
      behavior: "auto"
    });
  }
  handleScrollToElement(event) {
    window.scrollTo(0, this.topRef.current.offsetTop);
  }

  render() {
    return (
      <div class="top" ref={this.topRef}>
        <div>
          <h4 style={{ textAlign: "center" }}>Berelson Family Tree</h4>
          <h6 style={{ textAlign: "center" }}>
            Explore and learn more about the Berelson ancestry.
          </h6>
        </div>

        <div class="tree-wrapper">
          <div class="tree">
            <ul>
              <li>
                <a href="#">
                  <img class="tree-profile" src={Missing} />
                  <div class="tree-info">Koppel</div>
                </a>
                <a href="#">
                  <img class="tree-profile" src={Chana} />
                  <div class="tree-info">Chana Fodeman</div>
                </a>
                <ul>
                  <li>
                    <a class="family spouse" href="#">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Pinchas</div>
                    </a>

                    <a href="#">Katz</a>
                    <ul>
                      <li>
                        <a href="#">
                          <img class="tree-profile" src={Abram} />
                          <div class="tree-info">Abram</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">? (Brother)</a>
                        <ul>
                          <li>
                            <a href="#">Michael</a>
                            <ul>
                              <li>
                                <a href="#">Married?</a>
                                <a href="#">Putty</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Freide</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Pessel</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Rosa</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Simon</div>
                    </a>
                    <a href="#">
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Riva</div>
                    </a>

                    <ul>
                      <li>
                        <a href="#">
                          <img class="tree-profile" src={DavidB} />
                          <div class="tree-info">David</div>
                        </a>

                        <a href="#">
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chana Federman</div>
                        </a>

                        <ul>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Dinchaz</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chaya</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Liebel</div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Anja</div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Shlameck</div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Rose</div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Lola</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <img class="tree-profile" src={Henry} />
                          <div class="tree-info">Henry</div>
                        </a>
                        <a href="#">
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Greta Glazer</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Riva} />
                              <div class="tree-info">Riva</div>
                            </a>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">David Berelson</div>
                            </a>
                            <ul>
                              <li>
                                <a href="#">
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Serj</div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Simon</div>
                            </a>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Bahbi Fisher</div>
                            </a>
                            <ul>
                              <li>
                                <a href="#">
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Serj</div>{" "}
                                </a>
                                <a href="#">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Dan Wagowski</div>
                                </a>
                                <ul>
                                  <li>
                                    <a class="short-single-child" href="#">
                                      <img class="tree-profile" src={Missing} />
                                      <div class="tree-info">Eli</div>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Aron</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Abby</div>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Shlomo</div>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Rosa</div>
                        </a>
                        <a href="#">
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Abram</div>
                        </a>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Raquel</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Felicia</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Avram</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chaina</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chamon</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Eita</div>
                        </a>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Shmuel</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <img class="tree-profile" src={Jack} />
                              <div class="tree-info">Jack</div>
                            </a>
                            <a href="#">
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Rita Guttman</div>
                            </a>
                            <ul>
                              <li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <img class="tree-profile" src={Missing} />
                                    <div class="tree-info">Sandy</div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img class="tree-profile" src={Missing} />
                                    <div class="tree-info">Mark</div>
                                  </a>
                                  <a href="#">
                                    <img class="tree-profile" src={Missing} />
                                    <div class="tree-info">Blaine</div>
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="#">
                                        {" "}
                                        <img
                                          class="tree-profile"
                                          src={Missing}
                                        />
                                        <div class="tree-info">Mollie</div>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        {" "}
                                        <img
                                          class="tree-profile"
                                          src={Missing}
                                        />
                                        <div class="tree-info">Nina</div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#">
                                    {" "}
                                    <img class="tree-profile" src={Missing} />
                                    <div class="tree-info">Illana</div>
                                  </a>
                                </li>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Avram</div>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Leizer</div>
                    </a>
                    <a href="#">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Ida</div>
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Shmuel</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Avram</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chana</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chava</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Sheindel</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Maika</div>
                    </a>
                    <a href="#">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Rochverg</div>
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Max</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Simon</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Phillip</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chana</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Girl</div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Girl</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Yessel</div>
                    </a>
                    <a href="#">
                      {" "}
                      <img class="tree-profile" src={Missing} />
                      <div class="tree-info">Paige Laufer</div>
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Yitzshak Baigelman</div>
                        </a>
                        <a href="#">
                          {" "}
                          <img class="tree-profile" src={Missing} />
                          <div class="tree-info">Chana HS</div>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Abram</div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Bryndi</div>
                            </a>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Morris Rubenstein</div>
                            </a>
                            <ul>
                              <li>
                                <a href="#">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Sam</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Ben</div>
                                </a>
                                <a href="#">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Rose</div>
                                </a>
                                <ul>
                                  <li>
                                    <a href="#">
                                      {" "}
                                      <img class="tree-profile" src={Missing} />
                                      <div class="tree-info">Joan Boarch</div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      {" "}
                                      <img class="tree-profile" src={Missing} />
                                      <div class="tree-info">Mitch</div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      {" "}
                                      <img class="tree-profile" src={Missing} />
                                      <div class="tree-info">Dan</div>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Esther</div>
                            </a>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Sherman</div>
                            </a>
                            <ul>
                              <li>
                                <a href="#">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Child</div>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  {" "}
                                  <img class="tree-profile" src={Missing} />
                                  <div class="tree-info">Child</div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Rivka</div>
                            </a>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Gottlieb</div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Ethel</div>
                            </a>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
                              <div class="tree-info">Bond</div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <img class="tree-profile" src={Missing} />
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
    );
  }
}
export default FamilyTree;
