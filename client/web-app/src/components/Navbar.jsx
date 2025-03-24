import { NavLink, useSearchParams } from "react-router";

function Navbar() {
  return (
    <div className="flex items-center justify-between gap-6 bg-[#161D2f] p-5 md:flex-col md:justify-start md:rounded-2xl">
      <NavLink to={"/"} className={"grow md:grow-0"}>
        <img src="/public/assets/logo.svg" alt="logo icon" />
      </NavLink>

      <NavLink to={"/"}>
        <img src="/public/assets/icon-nav-home.svg" alt="home icon" />
      </NavLink>

      <NavLink to={"/?category=Movie"}>
        <img src="/public/assets/icon-nav-movies.svg" alt="movies icon" />
      </NavLink>

      <NavLink to={"/?category=TV Series"}>
        <img src="/public/assets/icon-nav-tv-series.svg" alt="tv series icon" />
      </NavLink>

      <NavLink to={"/?isBookMarked=true"} className={"md:grow"}>
        <img src="/public/assets/icon-nav-bookmark.svg" alt="bookmark icon" />
      </NavLink>

      <div className="grow md:grow-0">
        <img
          src="/public/assets/image-avatar.png"
          alt="user icon"
          width={50}
          className="ml-auto"
        />
      </div>
    </div>
  );
}

export default Navbar;
