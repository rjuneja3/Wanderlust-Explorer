import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Weather from './components/WeatherComponent/WeatherComponent';
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
    <p>
      Hey, {account.username}! I'm happy to let you know: you are authenticated!
      <Weather></Weather>
    </p>
  );
};

const LoggedOutText = () => (
  <div>
    <p>
      Don't forget to start your backend server, then authenticate yourself.
    </p>
    <p>There's a signup option in the right hand corner.</p>
  </div>
);
