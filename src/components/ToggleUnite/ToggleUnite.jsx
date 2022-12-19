import React from "react";
import { NavLink } from "react-router-dom";

export default function ToggleUnite({ leaveSiteNav, book }) {
  return (
    <div>
      {book.book.map((unit) => {
        return (
          <NavLink
            onClick={leaveSiteNav}
            to={`/unittest/${book.id}_${unit.id}`}
            key={unit.id}
          >
            Unit- {unit.id}
          </NavLink>
        );
      })}
      ;
    </div>
  );
}
