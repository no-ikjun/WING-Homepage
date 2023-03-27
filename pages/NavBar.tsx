import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./modules/NavBar.module.css";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const [themeMode, setThemeMode] = useState<"dark" | "light">("light");
  const themeModeHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setThemeMode(themeMode === "dark" ? "light" : "dark");
    console.log(themeMode);
  };

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.pageYOffset !== 0 && router.pathname === "/");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={[styles.navbar, `${isVisible ? styles.nav_visible : styles.nav_unvisible}`].join(" ")} ref={componentRef}>
      <Link href="/">
        <Image className={[styles.logo_image, `${isVisible ? styles.logo_visible : styles.logo_unvisible}`].join(" ")} src="/Logo.webp" width={30} height={30} alt="Wing Logo" quality={100} />
        <Image className={[styles.logo_ment, `${isVisible ? styles.logo_visible : styles.logo_unvisible}`].join(" ")} src="/LogoMent.webp" width={90} height={30} alt="Wing Ment" quality={100} />
      </Link>
      <div className={styles.nav_right}>
        <div onClick={themeModeHandler}>
          <Image className={styles.dark_mode} src="/moon.webp" width={25} height={25} alt="Dark Mode" quality={100} />
        </div>
        <Link href="/sessions">Sessions</Link>
        <Link href="members">Members</Link>
      </div>
    </nav>
  );
}
