import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  compteur: state
});

const mapDispatchToProps = dispatch => ({
  onADD: () => dispatch({ type: "ADD" }),
  onADDa: () => dispatch({ type: "ADDa" }),
  onREMOVE: () => dispatch({ type: "REMOVE" }),
  onREMOVEa: () => dispatch({ type: "REMOVEa" }),
  onRESET: () => dispatch({ type: "RESET" }),

});

const CompteurComponent = ({ compteur,onADD, onADDa,onREMOVE, onREMOVEa, onRESET }) => (
  <div>
    <p>{compteur}</p>
    <button onClick={onADD}>ADD</button>
    <button onClick={onADDa}>ADD 10</button>
    <button onClick={onREMOVE}>REMOVE</button>
    <button onClick={onREMOVEa}>REMOVE 10</button>
    <button onClick={onRESET}>RESET</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompteurComponent);