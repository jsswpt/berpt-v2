import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import st from "./styles.module.scss";
import cn from "classnames";

import { AnimatePresence, motion } from "framer-motion";

import Logo from "shared/assets/media/imgs/logo-dark.png";

export const Other = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    ref.current?.addEventListener("load", (evt) => {
      setIsLoading(false);
    });
  }, [ref]);

  return (
    <motion.div
      key="base"
      exit={{ x: "100%", opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.64 }}
      className={st.other_page}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={st.loader_modal}
          ></motion.div>
        )}
        {isLoading ? (
          <motion.div
            key="first"
            initial={{ right: "50%", bottom: "50%" }}
            exit={{
              right: "8rem",
              bottom: "8rem",
              left: "auto",
              top: "auto",
              background: "var(--surface)",
            }}
            className={st.loading_as_button_wrap}
          >
            <div className={st.img_wrapper}>
              <img src={Logo} alt="Logo" className={st.img} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{
              right: "8rem",
              bottom: "8rem",
              background: "var(--surface)",
            }}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.16,
                mass: 1,
                type: "spring",
                bounce: 0.32,
              },
            }}
            whileTap={{
              scale: 0.6,
              transition: {
                duration: 0.16,
                mass: 1,
                type: "spring",
                bounce: 0.32,
              },
            }}
            className={st.loading_as_button_wrap}
          >
            <Link to="/" className={st.link}>
              <div className={st.img_wrapper}>
                <img src={Logo} alt="Logo" className={st.img} />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <iframe
        ref={ref}
        src={location.state}
        lang="ru"
        loading="lazy"
        className={st.window}
      />
    </motion.div>
  );
};
