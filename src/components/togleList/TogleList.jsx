import React from "react";
import { NavLink } from "react-router-dom";
import ToggleUnite from "../ToggleUnite/ToggleUnite";

export default function TogleList({ leaveSiteNav, book }) {
  return (
    <div>
      <NavLink to={`/booktest/${book.id}`} onClick={leaveSiteNav}>
        Essential words {book.id}
      </NavLink>
      <ToggleUnite leaveSiteNav={leaveSiteNav} key={book.id} book={book} />
    </div>
  );
}
