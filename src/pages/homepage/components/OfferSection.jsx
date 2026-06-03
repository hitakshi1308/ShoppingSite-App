import { useRef, useState } from "react";
import "../../../styles/OfferSection.css";

function OfferSection() {
    const [userEmail, setUserEmail] = useState([])

    const inputSubscribeRef = useRef()

    const handleSubscribeBtn = () => {
        // console.log(inputSubscribeRef)

        if(userEmail == ""){
            inputSubscribeRef.current?.focus();
        }else{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        if(!emailRegex.test(userEmail)){
            alert("Enter valid Email.")
            setUserEmail("")   
        }else{
            console.log(userEmail)
        }
    }
}
  return (
    <section className="offer-section">
      <div className="offer-text">
        STAY UPTO DATE ABOUT
        <br />
        OUR LATEST OFFERS
      </div>

      <div className="mail-box">
        <input
          ref={inputSubscribeRef}
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          value={userEmail}
          placeholder="Enter Your Email Address"
        />

        <button onClick={handleSubscribeBtn}>Subscribe to Newsletter</button>
      </div>
    </section>
  );
}

export default OfferSection;