import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Weather from './components/WeatherComponent/WeatherComponent';
import './App.css'; // Import the CSS file
export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
      <Header />

      {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
    </div>
  );
}

const LoggedInText = () => {
  const { account } = useAuth();

  return (
    <div>
      <Weather></Weather>
    </div>
  );
};


const LoggedOutText = () => (
  <div style={{ backgroundImage: 'url(https://free4kwallpapers.com/uploads/originals/2020/10/14/sunset-at-mountain-vordergl%C3%A4rnisch-in-glarus-switzerland-wallpaper.jpg)', width: '100%', backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
      Don't forget to start your backend server, then authenticate yourself.
    </p>
    <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px' }}>There's a signup option in the right-hand corner.</p>
  </div>
);

