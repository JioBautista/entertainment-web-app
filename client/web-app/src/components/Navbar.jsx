import { NavLink, useSearchParams } from "react-router";

function Navbar() {
  const [searchParams] = useSearchParams();
  return (
    <div className="flex items-center justify-between gap-6 bg-[#161D2f] p-5">
      <NavLink to={"/"} className={"grow"}>
        <img src="/src/assets/logo.svg" alt="logo icon" />
      </NavLink>

      <NavLink to={"/"}>
        <img src="/src/assets/icon-nav-home.svg" alt="home icon" />
      </NavLink>

      <NavLink to={"/?category=Movie"}>
        <img src="/src/assets/icon-nav-movies.svg" alt="movies icon" />
      </NavLink>

      <NavLink to={"/?category=TV Series"}>
        <img src="/src/assets/icon-nav-tv-series.svg" alt="tv series icon" />
      </NavLink>

      <NavLink to={"/?category=Bookmarks"}>
        <img src="/src/assets/icon-nav-bookmark.svg" alt="bookmark icon" />
      </NavLink>

      <div className="grow">
        <img
          src="/src/assets/image-avatar.png"
          alt="user icon"
          width={50}
          className="ml-auto"
        />
      </div>
    </div>
  );
}

export default Navbar;
