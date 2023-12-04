import "./about.css"
const About = () => {
    return (
        <>
            <div className="about-section">
                <img src="src/assets/mohit_yadav.jpg" width={400}/>
                <h1 className="about-heading title">
                    Mohit yadav<br />
                    <span>Software developer</span>
                    <hr />
                </h1>
                <p className="about-text">
                    yo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nulla ratione sunt vero dignissimos dolorum quidem at eius accusantium repellendus provident, recusandae, modi natus vitae adipisci, iusto expedita ut labore.
                </p>
            </div>
            {/* <div className="image-section">
                <h1 className="title">I like taking photos</h1>
                <div className="gallery">
                    <img src="src/assets/photo_gallery/PXL_20220522_035312767.jpg" alt="" />
                    <img src="src/assets/photo_gallery/PXL_20220908_001616664.jpg" alt="" />
                    <img src="src/assets/photo_gallery/PXL_20230813_011259541~2.jpg" alt="" />
                    <img src="src/assets/photo_gallery/PXL_20220522_035312767.jpg" alt="" />
                    <img src="src/assets/photo_gallery/PXL_20220522_035312767.jpg" alt="" />
                    <img src="src/assets/photo_gallery/PXL_20220522_035312767.jpg" alt="" />
                </div>
            </div> */}
        </>
    )
}

export default About