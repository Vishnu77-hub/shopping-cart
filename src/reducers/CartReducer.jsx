export const cartReducer = (state, action) => {  //state=current items, action=action to be performed
  let updatedItems; //updateedItems=changed items like quantity, price etc.

  switch (action.type) { //action.type=type of action
    case "ADD_ITEM": //ADD_ITEM=adding new item
      const existingItem = state.items.find(item => item.id === action.payload.id); //state.items=added particular item  payload=actions details like id

      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      break;

    case "REMOVE_ITEM"://REMOVE_ITEM=removing item
      updatedItems = state.items.filter(item => item.id !== action.payload);//using filter to remove item like when item id not equal to action id
      break;

    case "UPDATE_QUANTITY":
      updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.amount || 1 } // using map function to update quantity of item when item id is equal to action id the selected item added or subtracted 
          : item
      );
      break;

    default:
      return state; // Return current state if action type doesn't match
  }

  // Automatically recalculate total
  const newTotal = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0); //using reduce function to calculate total price of items

  return { items: updatedItems, total: newTotal };
};

//payload refers to the data passed to the action creator
//payload refers to the data is being send or recieve in a request/response model 