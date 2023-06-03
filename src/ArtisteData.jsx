// import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ArtistDataService from "../src/firebase.service";
// import './artists.css'
const ArtisteData = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [twitter, setTwitter] = useState('')
  const [instagram, setInstagram] = useState('')
  const [tiktok, setTiktok] = useState('')
  const notify = () => toast('Form submitted')
  // const [message, setMessage] = useState({error: false, msg: ''})
  const handleSubmit = async (e) => {
    e.preventDefault()
    // setMessage('')
    if (name === "" || email === "" || phone === "" || twitter === "" ||instagram === "" || tiktok === ""){
      // setMessage({error: true, msg: "Add all fields"});
      return;
    }
    const newArtist = {
      name: name,
      email: email,
      phone: phone,
      twitter: twitter,
      instagram: instagram,
      tiktok: tiktok
    }

    try {
      await ArtistDataService.addArtists(newArtist);
      // setMessage({error: false, msg: "new artist added"})
    } catch (err) {
      // setMessage({error: true, msg: err.message})
    }

    setName("");
    setEmail("")
    setPhone("");
    setTwitter("");
    setInstagram("");
    setTiktok("")
  };
  return (
    <>
    <div className="bul3_form-container">
      <div className="descrip">
        <p>
          Be The First Artistes To Join <span>Bullchord</span>, <br/> Mint and Sell
           Your Songs As <br/> <span className='underlined underline-clip'>NFT</span>
        </p>
      </div>
      <form className="form" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Stage Name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="number"
          name="Phone"
          placeholder="Phone"
          required
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          type="text"
          name="Twitter"
          placeholder="Twitter link"
          required
          onChange={(e) => setTwitter(e.target.value)}
          value={twitter}
        />
        <input
          type="text"
          name="Instagram"
          placeholder="Instagram link"
          required
          onChange={(e) => setInstagram(e.target.value)}
          value={instagram}
        />
        <input
          type="text"
          name="Tiktok"
          placeholder="Tiktok link"
          onChange={(e) => setTiktok(e.target.value)}
          value={tiktok}
        />
        {email ? (
          <input
            type="submit"
            value="submit"
            className="submit_button"
            onClick={notify}
          />
        ) : (
          <input
            type="submit"
            value="submit"
            className="submit_button"
            disabled
          />
        )}
        <ToastContainer />
      </form>
    </div>
    <div className="bull3_artist-down">
      <h1> Freedom For The People In Music</h1>
      </div>
    </>
  )
}
export default ArtisteData
