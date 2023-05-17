import Worker1 from '../assets/mechanic.png';
import Worker2 from '../assets/engineer.png';

const Workers = ({ workers }) => {
  return (
    <div className="worker-section">
        <h2 className="section-heading">Our Workers</h2>
        <div className="worker-slider">
          {workers && workers.map((worker, idx) => (
            <div className="worker-card" key={worker._id}>
              <div className='worker-details'>
                <h3 className="worker-name">{worker.name}</h3>
                {
                  worker?.specialization?.length > 1 
                    ? 
                    <>
                      {worker?.specialization.map((speciality) => <p className="worker-specialization" key={`${worker._id} + ${speciality}`}>{speciality}</p>)}
                    </>
                  : <p className="worker-specialization">{worker.specialization}</p>
                }
              </div>
              {
                idx % 2 === 0 
                ? <img src={Worker1} alt="Worker 1" className="worker-image" /> 
                : <img src={Worker2} alt="Worker 2" className="worker-image" />
              }
            </div>
          ))}
        </div>
    </div>
  );
};

export default Workers;