import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './datepicker.css';
import 'react-datepicker/dist/react-datepicker.module.css';
import ReactDatePicker from 'react-datepicker';


const getYear = (dob) => {
  return dob.getFullYear();
};

const changeYear = (year) => {
  console.log("Selected year:", year);
};

const years = Array.from({ length: 32 }, (_, i) => 1960 + i); // Generate years from 1990 to 2021



const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [date1, setDate1] = useState()
  const [date2, setDate2] = useState()

  const [dob, setDob] = useState(new Date())
  // const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDateSelect = (e) => {
    console.log('date select',e);
  }
  const handleDateChange = (e) => {
    console.log('date change',e);
    setStartDate(e)
    setDate1(e)
  }

  const getDateTime = (e) => {
      console.log('date n time',e)
      setStartDateTime(e)
      setDate2(e)
  }

  const setDateTime = () => {
      const dateString = '16/2/2024 8:09:00 PM'; // Note the modified date format
  const parts = dateString.split(/[/: ,]/); // Split the string into parts
  const year = parseInt(parts[2], 10);
  const month = parseInt(parts[1], 10) - 1; // Month is zero-based in JavaScript Date
  const day = parseInt(parts[0], 10);
  const hours = parseInt(parts[3], 10);
  const minutes = parseInt(parts[4], 10);
  const seconds = parseInt(parts[5], 10);
  const date = new Date(year, month, day, hours, minutes, seconds);
  setStartDateTime(date);
  }

  const setDobs = (e) => {
    console.log('dob',e)
    setDob(e)
  }

  const changeMonth = (index) => {
    const newDate = new Date(dob);
    newDate.setMonth(index);
    setDob(newDate);
  };

  const setandEditDob = () => {
    // let date = dob?.toLocaleDateString()
    let date = '20/7/1985'
    const parts = date.split(/[/: ,]/);
    const year = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10) - 1; // Month is zero-based in JavaScript Date
    const day = parseInt(parts[0], 10);
    const dates = new Date(year, month, day);
      setDob(dates)
  }
  return(<div className="datepicker" data-testid="Datepicker">
    <ReactDatePicker
  selected={startDate}
  onSelect={handleDateSelect} //when day is clicked
  onChange={handleDateChange} //only when value has changed
/>

{date1?.toLocaleDateString()}

<ReactDatePicker
      selected={startDateTime}
      onChange={getDateTime}
      timeInputLabel="Time:"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
    />

{date2?.toLocaleString()}
<button onClick={setDateTime}>Date and Time</button>


<ReactDatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select> */}
            <select
      value={date.getMonth()} // Use getMonth() directly for the value
      onChange={(e) => changeMonth(Number(e.target.value))} // Convert value to number
    >
      {months.map((month, index) => (
        <option key={month} value={index}>
          {month}
        </option>
      ))}
    </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={dob}
      onChange={setDobs}
    />
<button onClick={setandEditDob}>dob</button>
{dob?.toLocaleDateString()}
  </div>);
};

Datepicker.propTypes = {};

Datepicker.defaultProps = {};

export default Datepicker;
