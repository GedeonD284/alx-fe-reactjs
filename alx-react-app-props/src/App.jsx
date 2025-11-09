import WelcomeMessage from "./components/WelcomeMessage"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import UserProfile from "./components/UserProfile"
import Counter from "./components/Counter"
import ProfilePage from "./components/ProfilePage"
import UserContext from "./components/UserContext"

function App() {

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <div>
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
         <Counter/>
        <WelcomeMessage/>
        <Header/>
        <MainContent/>
        <Footer/>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
    </>
  )
}

export default App
