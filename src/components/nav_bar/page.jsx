import Style from "./styles.sass";

export default function NavBar() {
  return (
    <div className={`${Style.div_nav_bar} div-nav-bar`}>
      <h1 className={`${Style.div_nav_bar_h1} div-nav-bar-h1`}>LOGO</h1>
      <div className={`${Style.div_nav_bar_links} div-nav-bar-links`}>
        <a
          className={`${Style.div_nav_bar_links_home} div-nav-bar-links-home`}
          href="#"
        >
          Home
        </a>
        <a
          className={`${Style.div_nav_bar_links_blog} div-nav-bar-links-blog`}
          href="#"
        >
          Blog
        </a>
      </div>
    </div>
  );
}
