import tw from "twin.macro"
import { useNavigate } from "react-router-dom"
import { ReactComponent as CartIcon } from "../assets/svg/cart.svg"

export default function NavBar({ drawer: [, setDrawerOpen], setIsSignedIn }) {
  const navigate = useNavigate()

  const toggleDrawer = () => setDrawerOpen(curr => !curr)

  return (
    <Bar>
      <Logo>TW App</Logo>
      <Nav>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/shop")}>Shop</Button>
        <Button onClick={() => navigate("/profile")}>Profile</Button>
        <Button onClick={() => setIsSignedIn(false)}>Sign Out</Button>
        <DrawerButton onClick={toggleDrawer}>
          <StyledCartIcon />
        </DrawerButton>
      </Nav>
    </Bar>
  )
}

const Bar = tw.div`flex items-center justify-around sticky top-0 w-full h-24 bg-red-500`
const Logo = tw.h1`text-5xl text-white`
const Nav = tw.div`flex gap-x-8 text-white underline text-xl`

const Button = tw.button``
const DrawerButton = tw.button``
const StyledCartIcon = tw(CartIcon)`h-10`
