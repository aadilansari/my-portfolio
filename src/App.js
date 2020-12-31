import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Header from "./Components/Organism/Header";
import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Zilla Slab"].join(","),
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/blogs">
            <BlogsPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
