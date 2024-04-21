import Link from "next/link";
import "./Homepagebttmcomponent.css";

export default function Homepagebttmcomponent() {
  return (
    <div className="bttmcomponent">
      <div className="halfcircle">
        <h1>Soft Serenity</h1>
        <p>Feel serene with neutral essentials </p>
        <Link href={"/marketplace"}>
          <button> Shop Now</button>
        </Link>
      </div>
      <div className="leftsidecircles">
        <div className="circle1">
          <img src="./circleshoe1.png" />
        </div>
        <div className="circle2">
          <img src="./circleshoe2.png" />
        </div>
        <div className="circle3"> </div>
        <div className="circle4"> </div>
        <div className="circle5"> </div>
        <div className="circle6">
          <img src="./circleshoe4.png" />
        </div>
        <div className="circle7"> </div>
        <div className="circle8">
          <img src="circleshoe3.png" />
        </div>
        <div className="circle9"> </div>
      </div>
    </div>
  );
}
