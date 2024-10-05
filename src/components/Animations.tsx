import BouncyHover from "../designs/BouncyHover"
// import BouncyNavBar from "../designs/BouncyNavBar"
const Animations = () => {
  // component using tailwind
  return (
    <div className="flex justify-center items-center flex-wrap gap-y-8 w-full p-4">
        <div className="w-full flex flex-col">
            <h2 className="text-4xl text-red-800 underline">Animations</h2>
            <p className="text-1xl">Small animations created using css and gsap.</p>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
            <BouncyHover />
            {/* <BouncyNavBar /> */}
        </div>
    </div>
  )
}

export default Animations