import { useState } from "react";
import { useDispatch } from "react-redux";
import { setScroll } from "../../redux/pageSlice";

function Scroll() {
  const [wheel, setWheel] = useState(0);
  const dispatch = useDispatch();

  window.addEventListener("wheel", (evt) => {
    +evt.deltaY > 0 ? setWheel(wheel + 1) : setWheel(wheel > 0 ? wheel - 1 : 0);
  });

  if (!(wheel % 25)) dispatch(setScroll(wheel));

  return <>{wheel}</>;
}

export default Scroll;
