
import { NavLink } from "react-router-dom";
import { singers } from "../data/singers";

function SingerNav() {
  return (
    <nav className="singer-nav">
      {singers.map((singer) => (
        <NavLink
          key={singer.id}
          to={`/singer/${singer.id}`}
          style={{ backgroundColor: singer.color }}
          className={({ isActive }) =>
            isActive ? "singer-button active" : "singer-button"
          }
        >
          {singer.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default SingerNav;
