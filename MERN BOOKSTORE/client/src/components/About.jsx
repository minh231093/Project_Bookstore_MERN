// import React from "react";

// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBTextArea,
//   MDBBtn,
// } from "mdb-react-ui-kit";

// export default function About() {
//   return (
//     <MDBContainer fluid className="p-3 my-5 h-custom">
//       <section className="border text-center mb-5">
//         <h3 className="mb-5">Contact us</h3>
//         <div className="row">
//           <div className="col-lg-5">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.0621565218!2d106.77233848943669!3d10.867396727874524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527e7e8abb0eb%3A0xec43e4b99472c18a!2zVUlUIC0gQ-G7lW5nIEE!5e0!3m2!1sen!2s!4v1701851712726!5m2!1sen!2s"
//               className="h-100 w-100"
//               style={{ border: "0" }}
//               loading="lazy"
//             ></iframe>
//           </div>
//           <div className="col-lg-7">
//             <form>
//               <div className="row">
//                 <div className="col-md-9">
//                   <MDBRow className="mb-4">
//                     <MDBCol>
//                       <MDBInput label="First name" id="form3FirstName" />
//                     </MDBCol>
//                     <MDBCol>
//                       <MDBInput label="Email Address" id="form3Email" />
//                     </MDBCol>
//                   </MDBRow>
//                   <MDBInput
//                     type="text"
//                     label="Subject"
//                     id="form3Subject"
//                     v-model="form3Subject"
//                     wrapperClass="mb-4"
//                   />
//                   <MDBTextArea
//                     label="Message"
//                     id="form3Textarea"
//                     wrapperClass="mb-4"
//                   />
//                   <MDBBtn color="primary" className="mb-4">
//                     {" "}
//                     Send{" "}
//                   </MDBBtn>
//                 </div>
//                 <div className="col-md-3">
//                   <ul className="list-unstyled">
//                     <li>
//                       <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
//                       <p>
//                         <small>New York, NY 10012, USA</small>
//                       </p>
//                     </li>
//                     <li>
//                       <i className="fas fa-phone fa-2x text-primary"></i>
//                       <p>
//                         <small>+ 01 234 567 89</small>
//                       </p>
//                     </li>
//                     <li>
//                       <i className="fas fa-envelope fa-2x text-primary"></i>
//                       <p>
//                         <small>contact@gmail.com</small>
//                       </p>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </MDBContainer>
//   );
// }
export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800 text-center">
        Welcome to bBooks!
      </h1>
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Who We are</h2>
      <p className="mb-4 text-slate-700">
        At bBooks, our enthusiasm for literature drives us to cultivate a
        community of passionate readers. Comprising a team of committed book
        aficionados, we strongly believe in the transformative influence of
        literature to motivate, educate, and provide enjoyment. Our goal is to
        establish a welcoming and inclusive space where readers from diverse
        backgrounds can unite, explore new literary works, express their
        opinions, and build connections with kindred spirits.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-slate-800 text-center">
        We have faith in the ability of books to motivate, enlighten, and change
        lives. Come join us on the bBooks platform and embark on a literary
        journey of discovery.
      </h2>
    </div>
  );
}
