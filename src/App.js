import DashboardComponent from './components/Dashboard/dashboard.js';
import './App.css';
import { SnackbarProvider } from 'notistack';
function App() {
  return (
    <SnackbarProvider maxSnack={1}>
      <div className="App">
        <DashboardComponent />

      </div>
    </SnackbarProvider>
  );
}

export default App;
