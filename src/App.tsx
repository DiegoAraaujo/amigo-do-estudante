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
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  return (
    <DarkContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          <Route element={<Container />}>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkContextProvider>
  );
};

export default App;
