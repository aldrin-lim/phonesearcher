/**
 * @author Aldrin Lim
 * Set Redux State
 * @param {array} args 
 */

export const setPhoneUnitList = (args) => {
  return {
    type: "SET_PHONEUNITS",
    payload: args
  };
};