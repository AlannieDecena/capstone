// Import the App.css file to style our App component
import "./App.css";

// Import the AppRoutes component which contains our application routes
import AppRoutes from "./routes/AppRoutes";

// Define our App component
function App() {

  // Render our App component
  return (
    // Create a div with the "App" class
    <div className="App">

      {/* Render our AppRoutes component */}
      <AppRoutes/>


    </div>
  );
}

// Export our App component as the default export of this module
export default App;
