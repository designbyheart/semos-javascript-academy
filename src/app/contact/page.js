"use client";
import NavigationMenu from "@/components/molecules/NavigationMenu";
import Header from "@/components/organisms/Header";
import { useState } from "react";

const ContactPage = () => {
  const [clickTotal, setClickTotal] = useState(0);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "some@email.com",
    birthYear: 1990,
  });

  const buttonStyle = {
    fontSize: 24,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    backgroundColor: "purple",
  };

  const inputStyle = {
    fontSize: 24,
    marginTop: 20,
    padding: 20,
  }

  const onButtonClick = () => {
    console.log("clickTotal", clickTotal);
    // TODO: Treba ograniciti klikove na 10
    // Treba proveriti koja je trenutna vrednost ili
    // koja je vrednost kada se sabere sa 1
    // Ako je nova vrednost granicna (ili ce biti ako se sabere sa 1)
    // samo vratite iz funkcije bez menjanja (poziva setClickTotal)
    const newValue = clickTotal + 1;

    if (newValue > 10) {
      return;
    }

    setClickTotal(newValue);
  };

  const onButtonUnclick = () => {
    console.log("clickTotal", clickTotal);
    // TODO: Treba ograniciti klikove na 0

    if (clickTotal === 0) {
      return;
    }

    setClickTotal(clickTotal - 1);
  };

  const updateUser = (event, id) => {
    /*
    // Primer 1
    const updatedUser = {
      // email: user.email,
      // birthYear: user.birthYear,
      ...user,
      [id]: event.target.value
    };
    // updatedUser[id] = event.target.value;
  
    setUser(updatedUser);
    */
    
    // Primer 2
    // setUser({
    //     ...user,
    //     [id]: event.target.value
    // });
    user[id] = event.target.value;
    setUser(user)
  };

  console.log("ContactPage user", user);
  return (
    <div style={{ margin: 100, padding: "10rem" }}>
      {/* <Header user={user}/>
        <h1>Contact us, {user.name}</h
        p1> */}
      <p style={{ fontSize: 24 }}>Kliknuto je: {clickTotal} puta.</p>
      <button style={buttonStyle} onClick={onButtonClick}>
        Klikni me
      </button>

      <button style={buttonStyle} onClick={onButtonUnclick}>
        Un-Klikni me
      </button>
      <br />
      <br />
      <input
        type="text"
        defaultValue={user.name}
        placeholder="Unesite ime"
        onChange={(event) => updateUser(event, "name")}
        style={inputStyle}
      />
      <input
        type="text"
        defaultValue={user.email}
        placeholder="Unesite email"
        onChange={(event) => updateUser(event, "email")}
        style={inputStyle}
      />
    </div>
  );
};

export default ContactPage;
