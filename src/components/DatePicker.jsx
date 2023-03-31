import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      //   minDate={new Date()}
      //   maxDate={new Date()}
      filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
      dateFormat="dd/mm/yyyy"
      isClearable
      showYearDropdown
      scrollableYearDropdown
    />
  )
}

export default DatePicker
