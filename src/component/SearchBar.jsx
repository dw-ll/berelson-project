import React, { useState } from "react";
import { Search } from "semantic-ui-react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import searchData from "../json/searchData.js";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");
const SearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const handleResultSelect = (e, { result }) => {
    setPerson(result);
    setValue(result.title);
    setOpen(true);
  };

  const handleTagChange = (e, { value }) => {
    const searchQuery = value.toLowerCase();
    setIsLoading(true, value);
    setValue(value);
    let tagMatchArray = searchData;
    let runnerArray = [];

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
      setFilteredResults(runnerArray);
    }, 300);
  };
  return (
    <div>
      <Search
        className="search-bar"
        loading={isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={_.debounce(handleTagChange, 500, {
          leading: true
        })}
        results={filteredResults}
        value={value}
        size="small"
      />
      {(function() {
        if (open) {
          return (
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={open}
              onHide={() => setOpen(false)}
              className="modal-container"
            >
              <Modal.Header closeButton>
                <Modal.Title
                  className="modal-body"
                  id="contained-modal-title-vcenter"
                >
                  {person.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">
                <img
                  alt={person.image}
                  class="search-profile"
                  src={person.image}
                />
                <p>{person.description}</p>
              </Modal.Body>
              <Modal.Footer className="modal-foot">
                <Button
                  style={{ backgroundColor: "grey !important" }}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          );
        }
      })()}
    </div>
  );
};
export default SearchBar;
