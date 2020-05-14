import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { Switch } from "react-router";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import searchData from "../json/searchData.js";
import resultData from "../json/resultData.js";
import Results from "./Results.jsx";

import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");

const SearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [resultsArray, setResultsArray] = useState([]);
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState("");
  const [fire, setFire] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log("Resetting Fire");
    setFire(false);
  }, fire);

  const handleResultSelect = (e, { result, value, resultRunner }) => {
    setPerson(result);
    setValue(result.title);
  };

  const handleTagChange = (e, { value }) => {
    const searchQuery = value.toLowerCase();
    setIsLoading(true, value);
    setValue(value);
    let tagMatchArray = searchData;
    let resultArray = resultData;
    let runnerArray = [];
    let resultRunner = [];

    setTimeout(() => {
      if (searchQuery.length === 0) {
        setIsLoading(false);
        setValue("");
        setFilteredResults([]);
        runnerArray = [];
      }

      tagMatchArray.forEach(figure => {
        figure.tags.forEach(tag => {
          if (tag.includes(searchQuery)) {
            setIsLoading(false);
            if (!runnerArray.includes(figure)) {
              runnerArray.push(figure);
            }
          }
        });
      });
      resultArray.forEach(figure => {
        figure.tags.forEach(tag => {
          if (tag.value === searchQuery) {
            setIsLoading(false);
            if (!runnerArray.includes(figure)) {
              resultRunner.push(figure);
            }
          }
        });
      });
      setFilteredResults(runnerArray);
      setResultsArray(resultRunner);
    }, 300);
  };
  if (person !== "") {
    return (
      <div>
        <SearchBar />
        <Redirect
          to={{
            pathname: "/results/",
            state: { results: [resultsArray, value, person] }
          }}
        ></Redirect>
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <div>
        
          {/* {fire && (
            <Redirect
              to={{
                pathname: "/results/",
                state: { results: [resultsArray, person] }
              }}
            ></Redirect>
          )} */}
        </div>
      </Switch>
    </Router>
  );
};
export default withRouter(SearchBar);
