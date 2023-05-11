import * as React from "react";
import { useSpring, animated } from "@react-spring/web";

interface FadeProps extends React.HTMLAttributes<HTMLDivElement> {
  in: boolean;
  children: React.ReactNode;
  onEnter?: () => void;
  onExited?: () => void;
  from?: object;
  to?: object;
  delay?: number;
}
export const Animation: React.ForwardRefExoticComponent<
  FadeProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef(function Fade(props, ref) {
  const {
    in: open,
    children,
    onEnter,
    onExited,
    from = {},
    to = {},
    delay = 0,
    ...other
  } = props;

  const style = useSpring({
    from: {
      opacity: 0,
      ...from,
    },
    to: {
      opacity: open ? 1 : 0,
      ...to,
    },
    delay,
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});
