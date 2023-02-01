import st from "./styles.module.scss";
import cn from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";
import { LinkProps, NavigateOptions, useNavigate } from "react-router-dom";

interface PlateButtonLink extends HTMLMotionProps<"a"> {
  to: string;
  state?: NavigateOptions;
  size?: "fit" | "fill";
}

const baseTransition = {
  duration: 0.64,
  type: "spring",
  bounce: 0.48,
  ease: "circInOut",
};

export const PlateButtonLink = (props: PlateButtonLink) => {
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.onClick && props.onClick(e);
    navigate(props.to, props.state);
  };

  return (
    <motion.a
      {...props}
      transition={{ duration: 0.16, ease: "circOut" }}
      whileTap={{
        scale: 0.8,
        transition: {
          ...baseTransition,
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          ...baseTransition,
        },
      }}
      href={props.to}
      onClick={onClick}
      className={cn(st.plate_button_link, props.className, {
        [st.fit]: props.size === "fit" || !props.size,
        [st.fill]: props.size === "fill",
      })}
    >
      {props.children}
    </motion.a>
  );
};
