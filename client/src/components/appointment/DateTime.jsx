const DateTime = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime, handlePreviousStep, handleNextStep }) => {
    return (
        <div className='date-time-page'>
          <h3>Step 2: Choose Date and Time</h3>
          <div className='date-time-container'>
              <label>Date:</label>
              <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
              <label>Time:</label>
              <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required />
          </div>
          <div className='buttons-pos'>
            <button onClick={handlePreviousStep} className='next-button'>Previous</button>
            <button onClick={handleNextStep} className='next-button'>Next</button>
          </div>
        </div>
      );
}
 
export default DateTime;