import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

interface Container {
  className: any;
  children: React.ReactNode;
}

export const Container = (props: Container) => {
  return (
    <div className={cn(st.container, props.className)}>{props.children}</div>
  );
};
