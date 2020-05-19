  export const ADDITEM = "ADDITEM";

export function addItemAction(payload) {
  //Return the type of action is required, and optionally return a payload in which the reducer takes and manipulates the data. 
  return {
    type: "ADDITEM",
    payload: payload
  };
}