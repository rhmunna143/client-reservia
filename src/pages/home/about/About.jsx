import img1 from "../../../assets/img/about-img-1-1.jpg";
import img2 from "../../../assets/img/about-img-1-2.jpg";
import SeparatorBlack from "../../../components/separator/SeparatorBlack";

const About = () => {
    return (
        <div>
            <div className="container mx-auto my-20 flex text-xl justify-around gap-10 lg:justify-between flex-col lg:flex-row lg:items-center px-4 lg:px-0">
                <div className=" border-4 border-white relative sm:mx-auto">
                    <img src={img1} alt="" />

                    <div className="absolute top-80 w-fit border-4 border-white hidden md:flex">
                        <img src={img2} alt="" className="" />
                    </div>
                </div>

                <div className="w-1/2 sm:mx-auto">
                    <h6 className="text-primary font-playBall">Competently promote sticky supply chain</h6>
                    <h2 className="text-5xl font-bold">Priately unleash & <br /> "outside the box"</h2>
                    <p className="mt-5">
                        Enthusiastically syndicate high-quality initiatives vis-a-vis functional internal or "organic" sources. Intrinsicly formulate intuitive benefits through client-based content. Assertively embrace intuitive quality vectors rather than holistic process improvements.

                    </p>
                    <SeparatorBlack></SeparatorBlack>
                    <button className="bg-primary hover:bg-black text-white px-4 py-2 font-medium">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default About;