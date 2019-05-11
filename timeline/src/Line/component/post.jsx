import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import {
  
  CardBody,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  NavLink
} from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Ed from "../../gallery/component/people/post_ed.jsx";
import Fonia from "../../gallery/component/people/post_fonia.jsx";
import Gita from "../../gallery/component/people/post_gita.jsx";
import Henry from "../../gallery/component/people/post.henry.jsx";
import Jack from "../../gallery/component/people/post_jack.jsx";
import Justina from "../../gallery/component/people/post_justina.jsx";
import Katie from "../../gallery/component/people/post_katie.jsx";
import Levin from "../../gallery/component/people/post_levin.jsx";
import Pinek from "../../gallery/component/people/post_pinek.jsx";
import Pola from "../../gallery/component/people/post_pola.jsx";
import Rachella from "../../gallery/component/people/post_rachella.jsx";
import Riva from "../../gallery/component/people/post_riva.jsx";
import Sam from "../../gallery/component/people/post_sam.jsx";
import Sandy from "../../gallery/component/people/post_sandy.jsx";



import EdProfile from "../../Media/Post-WWII 2/Ed.Silver091.jpeg";
import FoniaProfile from "../../Media/Post-WWII 2/Fonia220.jpeg";
import GitaProfile from "../../Media/Post-WWII 2/Gita.Baigelman120.jpeg";
import HenryProfile from "../../Media/Post-WWII 2/Henry.Baigelman119.jpeg";
import JackProfile from "../../Media/Post-WWII 2/Jack.Baigelman057.jpeg";
import JustinaProfile from "../../Media/Post-WWII 2/justina197.jpeg";
import KatieProfile from "../../Media/Post-WWII 2/katie159.jpeg";
import LevinProfile from "../../Media/Post-WWII 2/Levin.Baigelman079.jpeg";
import PinekProfile from "../../Media/Post-WWII 2/Pinek.Baigelman041.jpeg";
import PolaProfile from "../../Media/Post-WWII 2/pola178.jpeg";
import RachellaProfile from "../../Media/Post-WWII 2/Rachella150.jpeg";
import RivaProfile from "../../Media/Post-WWII 2/Riva287.jpeg";
import SamProfile from "../../Media/Post-WWII 2/Samuel181.jpeg";
import SandyProfile from "../../Media/Post-WWII 2/Sandy.Baigelman056.jpeg";



//import {Print} from 'material-ui-icons/AccessAlarm';
class Line extends Component {
  state = {
    redirect: false
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
    }
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/post/ed"
            exact
            render={() => {
              return <Ed />;
            }}
          />
          <Route
            path="/post/fonia"
            exact
            render={() => {
              return <Fonia />;
            }}
          />
          <Route
            path="/post/gita"
            exact
            render={() => {
              return <Gita />;
            }}
          />
          <Route
            path="/post/henry"
            exact
            render={() => {
              return <Henry />;
            }}
          />
          <Route
            path="/post/jack"
            exact
            render={() => {
              return <Jack />;
            }}
          />
          <Route
            path="/post/justina"
            exact
            render={() => {
              return <Justina />;
            }}
          />
          <Route
            path="/post/katie"
            exact
            render={() => {
              return <Katie />;
            }}
          />
          <Route
            path="/post/levin"
            exact
            render={() => {
              return <Levin />;
            }}
          />
          <Route
            path="/post/pinek"
            exact
            render={() => {
              return <Pinek />;
            }}
          />
          <Route
            path="/post/pola"
            exact
            render={() => {
              return <Pola />;
            }}
          />
          <Route
            path="/post/rachella"
            exact
            render={() => {
              return <Rachella />;
            }}
          />
          <Route
            path="/post/riva"
            exact
            render={() => {
              return <Riva />;
            }}
          />
          <Route
            path="/post/sam"
            exact
            render={() => {
              return <Sam />;
            }}
          />
          <Route
            path="/post/sandy"
            exact
            render={() => {
              return <Sandy />;
            }}
          />
          <div>
            <div className="card card-default post-body">
              <div className="card-body main-nav">
                Information covering the time following World War II.
              </div>
            </div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Ed.Silver091.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Ed
                      </Typography>
                      <Typography component="p">
                        More info about Ed.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/ed"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Fonia220.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Fonia
                      </Typography>
                      <Typography component="p">
                        More info about Fonia.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/fonia"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Gita.Baigelman120.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Gita Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Gita.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/gita"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Henry.Baigelman119.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Henry Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Henry.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/henry"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Jack.Baigelman057.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Jack Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Jack.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/jack"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/justina197.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Justina
                      </Typography>
                      <Typography component="p">
                        More info about Justina.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/justina"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/katie159.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Katie
                      </Typography>
                      <Typography component="p">
                        More info about Katie.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/katie"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Levin.Baigelman079.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Levin Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Levin.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/levin"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Pinek.Baigelman041.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Pinek Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Pinek.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/pinek"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/pola178.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Pola
                      </Typography>
                      <Typography component="p">
                        More info about Pola.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/pola"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Rachella150.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Rachella
                      </Typography>
                      <Typography component="p">
                        More info about Rachella.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/rachella"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Riva287.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Riva
                      </Typography>
                      <Typography component="p">
                        More info about Riva.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/riva"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Samuel181.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Samuel Spielman
                      </Typography>
                      <Typography component="p">
                        More info about Samuel.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/sam"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Post-WWII 2/Sandy.Baigelman056.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Sandy Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Sandy.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/post/sandy"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default Line;
