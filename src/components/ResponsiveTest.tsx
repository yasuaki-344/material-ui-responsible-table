import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const MyComponent = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
};
