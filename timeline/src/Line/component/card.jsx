import React, {Component} from "react";
import Card from "@material-ui/core/Card";

export default class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            side:false
        }
    }
<Card className="card">
                        <CardActionArea>
                          <CardMedia
                            style={{ height: 0, paddingTop: "100%" }}
                            image={card.image}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {card.title}
                            </Typography>
                            <Typography component="p">
                              {card.subtitle}
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                        <Button
                          size="small"
                          color="primary"
                          component={Link}
                          to={card.path}
                          //onClick={this.handlePop}
                        >
                          Learn More
                        </Button>
                        <Popover
                          open={this.state.popped}
                          anchorEl={this.state.anchorEl}
                          anchorOrigin={{
                            horizontal: !this.state.side,
                            vertical: "center "
                          }}
                          transformOrigin={{
                            horizontal: this.state.side,
                            vertical: "bottom"
                          }}
                          onClose={this.handleRequestClose}
                        >
                          Whaddup
                        </Popover>
                      </Card>




}