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
  const [isRotating, setIsRotating] = useState(false);

  const themeModeHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsRotating(true);
    setThemeMode(themeMode === "dark" ? "light" : "dark");
    console.log(themeMode);
  };

  useEffect(() => {
    if (isRotating) {
      setTimeout(() => {
        setIsRotating(false);
      }, 200);
    }
  }, [isRotating]);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.pageYOffset !== 0 || router.pathname !== "/");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={router.pathname === "/" ? [styles.navbar, `${isVisible ? styles.nav_visible : styles.nav_unvisible}`].join(" ") : [styles.navbar, styles.nav_visible].join(" ")} ref={componentRef}>
      <Link href="/">
        <Image
          className={router.pathname === "/" ? [styles.logo_image, `${isVisible ? styles.logo_visible : styles.logo_unvisible}`].join(" ") : [styles.logo_image, styles.logo_visible].join(" ")}
          src="/Logo.webp"
          width={30}
          height={30}
          alt="Wing Logo"
          quality={100}
        />
        <Image
          className={router.pathname === "/" ? [styles.logo_ment, `${isVisible ? styles.logo_visible : styles.logo_unvisible}`].join(" ") : [styles.logo_ment, styles.logo_visible].join(" ")}
          src="/LogoMent.webp"
          width={90}
          height={30}
          alt="Wing Ment"
          quality={100}
        />
      </Link>
      <div
        className={
          router.pathname === "/" ? [styles.nav_right, `${isVisible ? styles.nav_right_visible : styles.nav_right_unvisible}`].join(" ") : [styles.nav_right, styles.nav_right_visible].join(" ")
        }
      >
        <Link href="/sessions" className={styles.link}>
          Sessions
        </Link>
        <Link href="members" className={styles.link}>
          Members
        </Link>
        <Link href="about" className={styles.link}>
          About
        </Link>
        <div onClick={themeModeHandler} className={styles.dark_div} style={{ height: 35 }}>
          <div className={[`${isRotating ? styles.rotate : ""}`, styles.icon_div].join(" ")}>
            <Image className={styles.dark_mode} src={`/${themeMode === "light" ? "moon" : "sun"}.webp`} width={20} height={20} alt="Dark Mode" quality={100} />
          </div>
        </div>
      </div>
    </nav>
  );
}
