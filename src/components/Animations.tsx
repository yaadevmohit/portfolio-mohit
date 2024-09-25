import BouncyHover from "../designs/BouncyHover"
const Animations = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-y-8 w-full border-2 p-4">
        <div className="w-full flex flex-col">
            <h2 className="text-4xl text-red-800 underline">Animations</h2>
            <p className="">Small animations created using css and gsap.</p>
        </div>
        <div className="animations-wrapper">
            <BouncyHover />
        </div>
    </div>
  )
}

export default Animations