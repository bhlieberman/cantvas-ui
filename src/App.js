import logo from './logo.svg';
import './App.css';
import { CourseInfo } from './components/CourseInfo';
import Root from './routes/root';

function App() {
  return (
    <div className="App">
      <Root />
      <CourseInfo />
    </div>
  );
}

export default App;
