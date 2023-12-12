import './App.css';
import DashboardContainer from './container/DashboardContainer';
import NavbarSection from './component/Navbar';
import { TaskProvider } from './component/TaskContext';

const App = () => {
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary p-4">
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <TaskProvider>
          <NavbarSection />
          <DashboardContainer />
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;
