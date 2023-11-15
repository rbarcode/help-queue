import React from "react";
import PropTypes from "prop-types";

function TicketDetails(props){
  const { ticket } = props;

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <hr/>
    </React.Fragment>
  )
}

TicketDetails.propTypes = {
  ticket: PropTypes.object
}

export default TicketDetails;