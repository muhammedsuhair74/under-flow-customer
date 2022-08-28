/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Card, CardOverflow, CardContent, AspectRatio, Typography, CssVarsProvider } from '@mui/joy';
import { useHistory } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import styles from './styles.scss';
import Ticket from '../../components/Ticket';

// const TicketListing = (props) => {
//   const { eventDetails, fetchTickets } = props;

//   useEffect(() => {
//     debugger
//     fetchTickets();
//   }, []);

//   const history = useHistory();
//   debugger;
//   return (
//     <div className={styles.wrapper}>
//       {eventDetails?.map((item) => {
//         debugger
//         return(
//         <Card className={styles.card} onClick={() => { history.push(`/ticket-details?${item.id}`); }}>
//           <CardContent>
//             <div className={styles.tophalfcontainer}>
//               <div className={styles.imagecontainer}>
//                 <img src="assets/logo.svg" alt="logo" />
//               </div>
//               <div className={`${styles.detailscontainer} font1`}>
//                 <div className={`${styles.title} largeFont`}>
//                   {item.title}
//                 </div>
//                 <div className={styles.time}>
//                   {item.time}
//                 </div>
//                 <div className={styles.location}>
//                   <img src="assets/location.svg" alt="location" width={24} />
//                   {item.location}
//                 </div>
//               </div>
//             </div>
//             <div className={styles.bottomhalfcontainer}>
//               <div className={`${styles.ticketdate} font1`}>
//                 {item.date}
//               </div>
//               <div className={`${styles.quantity} font1`}>
//                     Quantity :
//                 {item.quantity}
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       )})}
//     </div>
//   );
// };

const TicketListing = (props) => {
  const { eventDetails, fetchTickets } = props;

  useEffect(() => {
    fetchTickets();
  }, []);

  const history = useHistory();
  return (
    <CssVarsProvider>
    <div className={styles.wrapper}>
      {eventDetails?.map((item) => {
        return <div className={styles.ticket} key={item.id} onClick={() => { history.push(`/ticket-details?${item.id}`); }}>
          <Ticket ticket={item} />
        </div>
      })}
    </div>
    </CssVarsProvider>
  );
};

export default TicketListing;
