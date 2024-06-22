import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserContainer from './components/UserContainer';

function App() {

  return (
    <div>
      <Header />

      <main className="main">
        <UserContainer />
      </main>

      <Footer />
    </div>
  );
}

export default App;
