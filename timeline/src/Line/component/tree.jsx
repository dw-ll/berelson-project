import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import Tree from "react-d3-tree";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import chana from "../../Media/Pre-WWII/Chana.Fodeman025.jpeg";

const myTreeData = [
  {
    name: "Koppel Multzman",
    attributes: {
      keyA: "Koppel Multzman",
      keyB: "Chana"
    },
    children: [
      {
        name: "Level 2: A",
        attributes: {
          keyA: "Pinchas",
          keyB: "Freide",
          keyC: "Pessel",
          keyD: "Rosa"
        }
      },
      {
        name: "Level 2: B"
      }
    ]
  }
];

class FamilyTree extends Component {
  render() {
    return (
      <div class="tree-wrapper">
        <div class="tree">
          <ul>
            <li>
              <a href="#">Koppel</a>
              <a href="#">
                <div class="tree-info">Chana Fodeman</div>
              </a>
              <ul>
                <li>
                  <a class="family spouse" href="#">
                    Pinchas
                  </a>

                  <a href="#">Katz</a>
                  <ul>
                    <li>
                      <a href="#">Abram</a>
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
                  <a href="#">Freide</a>
                </li>
                <li>
                  <a href="#">Pessel</a>
                </li>
                <li>
                  <a href="#">Rosa</a>
                </li>
                <li>
                  <a href="#">Simon</a>
                  <a href="#">Riva</a>

                  <ul>
                    <li>
                      <a href="#">David </a>
                      <a href="#">Chana Federman</a>
                      <ul>
                        <li>
                          <a href="#">Dinchaz B. Lodz</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Chaya</a>
                      <ul>
                        <li>
                          <a href="#">Liebel</a>
                        </li>
                        <li>
                          <a href="#">Anja</a>
                        </li>
                        <li>
                          <a href="#">Shlameck</a>
                        </li>
                        <li>
                          <a href="#">Rose</a>
                        </li>
                        <li>
                          <a href="#">Lola</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Henry</a>
                      <a href="#">Greta Glazer</a>
                      <ul>
                        <li>
                          <a href="#">Riva</a>
                          <a href="#">David Berelson</a>
                          <ul>
                            <li>
                              <a class="short-single-child" href="#">
                                Serj testing longer name
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Simon</a>
                          <a href="#">Bahbi Fisher</a>
                          <ul>
                            <li>
                              <a href="#">Selina </a>
                              <a href="#">Dan Wagowski</a>
                              <ul>
                                <li>
                                  <a class="short-single-child" href="#">
                                    Eli testing longer name
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Aron</a>
                            </li>
                            <li>
                              <a href="#">Abby</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">Shlomo B. Lodz</a>
                    </li>

                    <li>
                      <a href="#">Rosa</a>
                      <a href="#">Abram (Shlomo)</a>
                      <a href="#">Raquel</a>
                      <ul>
                        <li>
                          <a href="#">
                            <div>Felicia</div>
                            <div>B. Lodz, D. Auschwitz</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Avram</a>
                    </li>
                    <li>
                      <a href="#">Chaina</a>
                    </li>
                    <li>
                      <a href="#">Chamon?</a>
                    </li>
                    <li>
                      <a href="#">Eita</a>
                      <a href="#">Shmuel</a>
                      <ul>
                        <li>
                          <a href="#">Jack</a>
                          <a href="#">Rita Guttman</a>
                          <ul>
                            <li>
                              <li>
                                <a href="#">Sandy</a>
                              </li>
                              <li>
                                <a href="#">Mark</a>
                                <a href="#">Blaine</a>
                                <ul>
                                  <li>
                                    <a href="#">Mollie</a>
                                  </li>
                                  <li>
                                    <a href="#">Nina</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Illana</a>
                              </li>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Avram</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Leizer</a>
                  <a href="#">Ida</a>
                  <ul>
                    <li>
                      <a href="#">Shmuel</a>
                    </li>
                    <li>
                      <a href="#">Avram</a>
                    </li>
                    <li>
                      <a href="#">Chana</a>
                    </li>
                    <li>
                      <a href="#">Chava</a>
                    </li>
                    <li>
                      <a href="#">Sheindel</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Maika </a>
                  <a href="#">Rochverg [Frank]</a>
                  <ul>
                    <li>
                      <a href="#">Max</a>
                    </li>
                    <li>
                      <a href="#">Simon</a>
                    </li>
                    <li>
                      <a href="#">Phillip</a>
                    </li>
                    <li>
                      <a href="#">Chana</a>
                    </li>
                    <li>
                      <a href="#">Girl</a>
                    </li>
                    <li>
                      <a href="#">Girl</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Yessel</a>
                  <a href="#">Paige Laufer</a>
                  <ul>
                    <li>
                      <a href="#">Yitzshak Baigelman</a>
                      <a href="#">Chana HS</a>
                      <ul>
                        <li>
                          <a href="#">Abram (Shlomo)</a>
                        </li>
                        <li>
                          <a href="#">Bryndi Blanche</a>
                          <a href="#">Morris Rubenstein</a>
                          <ul>
                            <li>
                              <a href="#">Sam</a>
                            </li>
                            <li>
                              <a href="#">Ben</a>
                              <a href="#">Rose</a>
                              <ul>
                                <li>
                                  <a href="#">Joan Boarch</a>
                                </li>
                                <li>
                                  <a href="#">Mitch</a>
                                </li>
                                <li>
                                  <a href="#">Dan</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Esther</a>
                          <a href="#">Sherman</a>
                          <ul>
                            <li>
                              <a href="#">Child</a>
                            </li>
                            <li>
                              <a href="#">Child</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Rivka</a>
                          <a href="#">Gottlieb</a>
                        </li>
                        <li>
                          <a href="#">Ethel</a>
                          <a href="#">Bond</a>
                        </li>
                        <li>
                          <a href="#">Avram</a>
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
    );
  }
}
export default FamilyTree;
