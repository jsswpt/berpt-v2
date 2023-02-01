import { useEffect, useMemo, useState, useCallback } from "react";

import "./styles.scss";
import cn from "classnames";
import { Routing } from "pages";
import { withProviders } from "./providers/with-providers";

export const App = withProviders(() => {
  return <Routing />;
});
