import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkContextProvider } from "./context/DarkTheme";
import { PomodoroProvider } from "./context/Pomodoro";

import Dashboard from "./pages/Dashboard";
import MoodMeasurer from "./pages/MoodMeasurer";
import Container from "./components/Container";
import Pomodoro from "./pages/Pomodoro";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Planning from "./pages/Planning";
import Materials from "./pages/Materials";

const App = () => {
  return (
    <DarkContextProvider>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/pomodoro/:subpage?"
              element={
                <PomodoroProvider>
                  <Pomodoro />
                </PomodoroProvider>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/community/:subpage?" element={<Community />} />
            <Route path="/:period/:subpage" element={<Dashboard />} />
            <Route path="/moodmeasurer/:subpage?" element={<MoodMeasurer />} />
            <Route path="/planning/:subpage?" element={<Planning />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </DarkContextProvider>
  );
};

export default App;
