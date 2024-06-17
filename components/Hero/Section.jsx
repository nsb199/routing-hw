import image from "/src/assets/section.jpg"
function Section(){
    return(
        <>
         <div className="section-container">
            <div className="left-section">
                <img src={image} alt="" />
            </div>
            <div className="right-section">
                <div className="right-contain">
                    <p className="para-head">Savor explosive flavors with NitroGers' gourmet burgers, crafted with care and bursting with deliciousness.</p>
                    <p className="para">Welcome to NitroGers, where every bite is an explosion of flavor! Our burgers are crafted with the finest ingredients, ensuring a juicy, mouthwatering experience with every order. From classic beefy delights to innovative gourmet creations, we cater to all taste buds. Indulge in our sizzling, fresh, and irresistibly delicious burgers that will leave you craving for more. NitroGers – taste the thrill!</p>
                    <button className="btn-sec">Get in Touch</button>
                </div>
            </div>
         </div>
        </>
    )
}
export default Section;