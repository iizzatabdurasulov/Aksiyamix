import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";
import Section from "../Section/Section";
import Search from "./Search";
import { styles } from "@/styles/styles";

export default function Navbar() {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <div className={`${styles.container} block lg:hidden`}>
        <Search />
      </div>
      <Section />
    </div>
  );
}
