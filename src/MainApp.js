import tw, { styled, css } from "twin.macro"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Wrapper from "./components/Wrapper"
import { Route, Routes } from "react-router-dom"
import Profile from "./pages/Profile"
import Shop from "./pages/Shop"
import ShoppingDrawer from "./components/ShoppingDrawer"
import { useState } from "react"

export default function MainApp({ setIsSignedIn }) {
  const drawer = useState(false) //Create Shopping Context and take shopping list out of user

  return (
    <Body>
      <NavBar drawer={drawer} setIsSignedIn={setIsSignedIn} />
      <Wrapper>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
          </>
        </Routes>
      </Wrapper>
      <ShoppingCart drawer={drawer} />
    </Body>
  )
}

const Body = tw.div`bg-gray-100`

const TranslatingDrawer = styled.div`
  ${tw`fixed right-0 top-0 transition-transform ease-in-out bg-gray-100`}
  ${({ open }) =>
    open
      ? css`
          transform: translateX(0%);
        `
      : css`
          transform: translateX(100%);
        `}
`

function ShoppingCart({ drawer: [drawerOpen, setDrawerOpen] }) {
  return (
    <TranslatingDrawer open={drawerOpen}>
      <ShoppingDrawer setDrawerOpen={setDrawerOpen} />
    </TranslatingDrawer>
  )
}
