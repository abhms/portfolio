import Navbar from "./componet/Navbar"
import Homes from "./componet/Home"

export default function Home() {
  return (
    <div>
    {/* <div className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Navbar/>
      <Homes/>
    </div>
  )
}
