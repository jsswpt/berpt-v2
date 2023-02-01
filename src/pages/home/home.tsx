import st from "./styles.module.scss";
import cn from "classnames";
import { Container, PlateButtonLink } from "shared/ui";
import { Link } from "react-router-dom";

import { motion, useIsPresent } from "framer-motion";

import Logo from "shared/assets/media/imgs/logo-white.png";
import { useState } from "react";

const delay = 0.32;
const duration = 0.64;
const mass = 1.2;

export const Home = () => {
  const isPresent = useIsPresent();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      key="basekey"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: duration,
      }}
      className={st.page}
    >
      <main className={st.main}>
        <section className={st.action_section}>
          <Container className={st.action_container}>
            <div className={cn(st.action_wrap, st.action_wrap__welcome)}>
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: [0, 0, 0, 1], y: "0%" }}
                transition={{
                  delay: 0,
                  duration: duration * 2,
                }}
                className={st.welcome__logo_wrapper}
              >
                <img src={Logo} alt="Berpt logo" className={st.logo_img} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{
                  opacity: [0, 0, 0, 1],
                  x: "0%",
                }}
                onAnimationComplete={() => setIsLoaded(true)}
                transition={{
                  delay: delay,
                  duration: duration * 2,
                }}
                className={st.welcome__title_wrapper}
              >
                <h1 className={st.welcome_title}>
                  Березниковский <br />
                  политехнический
                  <br />
                  техникум
                </h1>
              </motion.div>
            </div>
            <div className={cn(st.action_wrap, st.action_wrap__actions)}>
              <div className={st.actions__grid}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isLoaded && { scale: 1 }}
                  transition={{
                    duration: duration,
                    delay: 0,
                    bounce: 0.1,
                    mass: mass,
                    type: "spring",
                  }}
                >
                  <PlateButtonLink
                    state={{ state: "http://berpt.ru/berpolitekh-2017" }}
                    to="/other"
                    size="fill"
                  >
                    Берполитех
                  </PlateButtonLink>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isLoaded && { scale: 1 }}
                  transition={{
                    duration: duration,
                    delay: delay,
                    bounce: 0.1,
                    mass: mass,
                    type: "spring",
                  }}
                >
                  <PlateButtonLink
                    state={{ state: "https://school.permkrai.ru/" }}
                    to="/other"
                    size="fill"
                  >
                    ЭПОС
                  </PlateButtonLink>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isLoaded && { scale: 1 }}
                  transition={{
                    duration: duration,
                    delay: delay * 2,
                    bounce: 0.1,
                    mass: mass,
                    type: "spring",
                  }}
                >
                  <PlateButtonLink
                    to="/other"
                    state={{
                      state: "https://www.uralkali.com/ru/career/vacancies/",
                    }}
                    size="fill"
                  >
                    ПАО «Уралкалий»
                  </PlateButtonLink>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isLoaded && { scale: 1 }}
                  transition={{
                    duration: duration,
                    delay: delay * 3,
                    bounce: 0.1,
                    mass: mass,
                    type: "spring",
                  }}
                >
                  <PlateButtonLink to="/other" size="fill">
                    Чемпионатное движение
                  </PlateButtonLink>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer>footer</footer>
    </motion.div>
  );
};
