import React from 'react'
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'

const CREATE_QUOTE = 'CREATE_QUOTE'
const DELETE_QUOTE = 'DELETE_QUOTE'
const EDIT_QUOTE_AUTHENTICITY = 'EDIT_QUOTE_AUTHENTICITY'
const SET_HIGHLIGHTED_QUOTE = 'SET_HIGHLIGHTED_QUOTE'
const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_QUOTE:
      return { ...state, quotes: [...state.quotes, action.payload] }
    case DELETE_QUOTE:
      return { ...state, quotes: state.quotes.filter(qt => qt.id !== action.payload) }
    case EDIT_QUOTE_AUTHENTICITY:
      return {
        ...state,
        quotes: state.quotes.map(qt => {
          if (qt.id != action.payload) return qt
          return { ...qt, apocryphal: !qt.apocryphal }
        })
      }
    case SET_HIGHLIGHTED_QUOTE:
      return {
        ...state,
        highlightedQuote: state.highlightedQuote !== action.payload
          ? action.payload
          : null
      }
    case TOGGLE_VISIBILITY:
      return { ...state, displayAllQuotes: !state.displayAllQuotes }
    default:
      return state
  }
}

export default function App() {

  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
      />
      <QuoteForm
      />
    </div>
  )
}
