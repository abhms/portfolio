import Navbar from "./component/Navbar"
import Homes from "./component/Home"
import Experience from "./component/Experience"

export default function Home() {
  return (
    <div>
    {/* <div className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Navbar/>
      <Homes/>
      <Experience/>
    </div>
  )
}
