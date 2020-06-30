// import React, { Component } from "react";

// import { Link } from "react-router-dom";
// import { GlobalContext } from "../store";
// import Container from "react-bootstrap/Container";
// import QrIllustration from "../assets/images/qr-icon.svg";

// export default class QrPage extends Component {
//   render() {
//     return (
//       <Container
//         className="qr-page text-center center-div"
//         style={styles.container}
//       >
//         <img src={QrIllustration} alt="scan icon" style={styles.img} />
//         <p className="worksans-light my-3" style={styles.p}>
//           Scan the QR-Code near the animal's exhibition to play!
//         </p>
//         <button className="nunito-font red-bg my-2">
//           <Link style={styles.link} to="/scanner">
//             Scan now
//           </Link>
//         </button>
//       </Container>
//     );
//   }
// }

// const styles = {
//   container: {
//     width: "85%",
//     maxWidth: "400px",
//   },
//   img: {
//     width: "190px",
//     marginBottom: "30px",
//   },
//   p: {
//     fontSize: "25px",
//   },
//   link: { color: "white" },
// };

// QrPage.contextType = GlobalContext;
