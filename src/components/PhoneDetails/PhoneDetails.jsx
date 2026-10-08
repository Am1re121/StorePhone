import { Link, useParams } from "react-router-dom";

function PhoneDetails(props) {
    const { id } = useParams();

    const phone = props.phones.find((phone) => phone.id === Number(id));

    return (
        <>
        <Link to="/" style={{position:"relative", top:"-260px", left:"50px", fontFamily:"'Poppins', sans-serif", fontSize:"25px", textDecoration:"none"}}>←</Link>
        <img src={phone.img} alt={phone.name} style={{ height: "370px", width: "300px", position: "relative", top: "150px", left: "50px" }} /> 
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "40px", position: "relative", top: "-230px", left: "430px" }}>{phone.name}</h1>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "35px", position: "relative", top: "-220px", left: "430px" }}>${phone.price}.00</h2>
        <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"18px", position:"relative", top:"-210px", left:"430px"}}>{phone.hasInStock ? "In Stock" : "Out of Stock"}</p>
        <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"20px", position:"relative", top:"-180px", left:"430px"}}>{phone.description}</p>
        <button style={{ position: "relative", top: "-150px", left: "430px", height: "60px", width: "160px", borderRadius: "30px", border: "none", fontSize: "20px", fontFamily: "'Poppins', sans-serif", backgroundColor: "#F5F6F8" }}>Buy Now</button>

        </> 
    )
}

export default PhoneDetails;