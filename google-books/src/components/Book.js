import React from "react";
import { ListItem } from "./List";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
          <h3>{title}</h3>
          {subtitle && <h5>{subtitle}</h5>}
    
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
          </div>
          <p>Written by {authors}</p>
          <img src={image} alt={title} />
   
          <p>{description}</p>
    </ListItem>
  );
}

export default Book;