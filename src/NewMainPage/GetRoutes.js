import { Route, Routes } from "react-router-dom";
// TODO: These function names will be different depending on what they were named in GetProject.js
import {
  // CurrentWaterSensors,
  // MachineManager,
  // NextFavoriteArtist,
  // JoustRemake,
  // MoireCapstone,
  TrussBust,
  Flicker,
  ShrinkageCalculator,
  LegoLab,
  FBookshelf, 
  Coaster,
  BonsaiTree,
  AlumRing,
  BusiCards,
} from "./GetProject";
import Resume from "./Resume";
import NewMainPage from "./NewMainPage";
import ChinaWallMoment from "./ChinaWallMoment/ChinaWallMoment";

// TODO: You will want to update the routes to match the function name of your onepagers (inside the </> and also the path name)
export default function GetRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NewMainPage />} />
      <Route path="resume" element={<Resume />} />
      {/* <Route path="projects" element={<Projects />} /> */}
      <Route path="china-wall-moment" element={<ChinaWallMoment />} />
      <Route path="truss-bust" element={<TrussBust />} />
      <Route path="flicker" element={<Flicker />} />
      <Route path="shrinkage-calculator" element={<ShrinkageCalculator />} />
      <Route path="LegoLab" element={<LegoLab/>}/>
      <Route path="FBookshelf" element={<FBookshelf />} />
      <Route path="Coaster" element={<Coaster/>}/>
      <Route path="BonsaiTree" element={<BonsaiTree/>}/>
      <Route path="AlumRing" element={<AlumRing/>}/>
      <Route path="BusiCards" element={<BusiCards/>}/>
      {/*<Route path="double-pendulum-project" element={<DoublePendulum />} /> */}
    </Routes>
  );
}
