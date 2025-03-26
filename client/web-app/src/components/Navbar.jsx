import { NavLink, useSearchParams } from "react-router";

function Navbar() {
  return (
    <div className="flex items-center justify-center gap-10 bg-[#161D2f] p-5 md:flex-col md:justify-start md:rounded-2xl md:self-start md:h-[500px] md:max-w-[96px]">
      <NavLink to={"/"} className={"grow md:grow-0"}>
        <img src="/assets/logo.svg" alt="logo icon" />
      </NavLink>

      <NavLink to={"/"}>
        <img
          src="/assets/icon-nav-home.svg"
          alt="home icon"
          className="md:w-[25px]"
        />
      </NavLink>

      <NavLink to={"/?category=Movie"}>
        <img
          src="/assets/icon-nav-movies.svg"
          alt="movies icon"
          className="md:w-[25px]"
        />
      </NavLink>

      <NavLink to={"/?category=TV Series"}>
        <img
          src="/assets/icon-nav-tv-series.svg"
          alt="tv series icon"
          className="md:w-[25px]"
        />
      </NavLink>

      <NavLink to={"/?isBookMarked=true"} className={"grow-2 md:grow-0"}>
        <img
          src="/assets/icon-nav-bookmark.svg"
          alt="bookmark icon"
          className="md:w-[25px]"
        />
      </NavLink>
    </div>
  );
}

export default Navbar;
