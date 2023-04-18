import { v4 as uuidv4 } from 'uuid'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  LOAD_CONTACT,
  UPDATE_CONTACT,
} from './Types'

const contactsReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    // load contacts
    case LOAD_CONTACT: {
      return [...action.payload]
    }
    // delete contact
    case DELETE_CONTACT: {
      const updatedContacts = state.filter((contact) => contact.id !== payload)
      return [...updatedContacts]
    }

    // add contact
    case ADD_CONTACT: {
      let contactToAdd = {
        id: uuidv4(),
        ...payload,
      }
      return [contactToAdd, ...state]
    }

    // update contact
    case UPDATE_CONTACT: {
      const { id, updatedContact } = payload
      const contacts = state.map((contact) => {
        if (contact.id === id) {
          // update
          return {
            id,
            ...updatedContact,
          }
        } else {
          return contact
        }
      })
      return [...contacts]
    }

    // default return
    default: {
      return state
    }
  }
}
export default contactsReducer
