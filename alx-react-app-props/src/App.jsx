import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";

export default function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const DataContext = React.createContext();

  function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
    return (
      <div>
        <h1>Hi there</h1>
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
      </div>
    
    );
  }


}