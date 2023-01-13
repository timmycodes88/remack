import MainApp from "./MainApp"
import SignIn from "./pages/SignIn"
import { useState } from "react"

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <>
      {isSignedIn ? (
        <MainApp setIsSignedIn={setIsSignedIn} />
      ) : (
        <SignIn setIsSignedIn={setIsSignedIn} />
      )}
    </>
  )
}
