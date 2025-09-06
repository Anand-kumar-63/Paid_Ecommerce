
import Review from './Review.jsx';

export default function Hero() {
  return (
    <>
        <HeroPage/>
        <Review/>
        <Footer/>
    </>
  );
}


function HeroPage()
{
    return(
        <section >
      <h1 >
        Your Trusted Partner in Manufacturing, Fabrication & Industrial Solutions
      </h1>
      <p >
        From advanced packaging machines to custom fabrication works – we deliver
        quality, reliability, and innovation.
      </p>
      <button>
        👉 Get in Touch Today
      </button>
    </section>
    )
}


function Footer(){
    return(
        <div>
            <div>
                <h4>location</h4>
            </div>
            <div>
                <h4>Follow Us</h4>
            </div>
            <div>
                <h4>About Us</h4>
            </div>
        </div>
    )
}