import React from "react";
import MyButton from "./myButton";

class Contact extends React.Component {
  render() {
    return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ddd" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,202.7C672,171,768,117,864,117.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <section className="contact" id="contact" style={{backgroundColor :"#ddd"}}>
        <div className="container">
          <h2 className="text-center">Contact Me</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6" data-aos="zoom-in">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputUsername" className="form-label">
                    Username
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputUsername"
                    placeholder="Name..."
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="email@..."
                  />
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Message</label>
                </div>

                {/* <button type="submit" className="btn btn-primary btn-block" style={{width:"100%"}}>
                  Submit
                </button> */}
                <MyButton type="submit" text="Submit" btnClass="btn btn-primary btn-block mb-5" style={{width:"100%"}}/>
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
}
export default Contact;
