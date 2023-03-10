import tw from "twin.macro"
import ProfileAvatar from "../../components/ProfileAvatar"

export default function Friends() {
  const friends = [{ username: "Tim" }, { username: "David" }]
  return (
    <>
      {friends.map(friend => {
        return (
          <FriendContainer>
            <ProfileAvatar />
            <h1>{friend.username}</h1>
          </FriendContainer>
        )
      })}
    </>
  )
}

const FriendContainer = tw.div`flex gap-4 items-center hover:bg-red-500 hover:text-white cursor-pointer px-2 py-1 rounded`
