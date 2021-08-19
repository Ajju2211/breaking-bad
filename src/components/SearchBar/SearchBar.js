import React,{ useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useQuery } from "../utils";
import "./styles.css";

export default function SearchBar({ onSubmit, onChange, text, ...props }) {
  let query = useQuery();
  const history = useHistory();
  const searchNow = () => {
              let trimmedText = text.trim();
              trimmedText = trimmedText.replace(/\s/g, ' ');
              if (trimmedText.length < 1) {
                alert('Enter min characters');
                return;
              }
              trimmedText = trimmedText.replace(/\s/g, '+');
              query.set('name', trimmedText);
              history.push({ search: query.toString() })
              if (onSubmit) {
                onSubmit(query.toString());
              }
  }
  useEffect(() => {
     const enterListener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        searchNow();
      }
    };
    window.document.querySelector('input[aria-describedby="search-input"]').addEventListener("keydown", enterListener);
    return () => {
      window.document.querySelector('input[aria-describedby="search-input"]').removeEventListener("keydown", enterListener);
    };
  })
  return (
    <div className={props.className + " a"}>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search character"
          aria-label="Search Character"
          aria-describedby="search-input"
          onChange={(e) => onChange(e.target.value)}
        />
        <div class="input-group-append">
          <span class="input-group-text" id="search-input">
            <FaSearch onClick={() => {
              searchNow();
            }} />
          </span>
        </div>
      </div>
    </div>
  );
}
