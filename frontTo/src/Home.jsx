import { useEffect } from "react";
import { init } from "./utils/initDroneLayout";

function Home() {
  useEffect(() => {
    init();
  }, []);

  return <div></div>;
}

export default Home;
