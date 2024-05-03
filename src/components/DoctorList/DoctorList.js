import '../DoctorList/DoctorList.scss';

function DoctorList({distances, doctors, filteredDoctors}) {
    const doctorsWithDistances = filteredDoctors.map((doctor, index) => ({
        index,
        doctor,
        distance: distances[index],
    }));

    doctorsWithDistances.sort((a, b) => {
        return parseFloat(a.distance) - parseFloat(b.distance);
    });

    return (
        <section className="list">
            <div className="list__result-container">
                {doctorsWithDistances.map(({ doctor, distance }) => (
                    <div key={doctor.id} className="list__container">
                        <div className="list__doctor-info">
                            <h3 className="list__name">{doctor.name}</h3>
                            <p className="list__cpso">CPSO#: {doctor.cpso_number}</p>
                        </div>
                        <p className="list__distance">{distance === 'Distance calculation error' ? 'Distance calculation error': `Distance: ${distance}`}</p>
                        <div className="list__info-container">
                            <div className="list__specialty-info">
                                <h4 className="list__specialty-title">Specialty</h4>
                                <p className="list__specialty">{doctor.specialty}</p>
                            </div>
                            <div className="list__address-details">
                                <h4 className="list__address-title">Practice</h4>
                                <p className="list__hospital">{doctor.practice_name}</p>
                                <p className="list__street">{doctor.address_street}</p>
                                <a className="list__address">
                                    {doctor.address_city}, {doctor.address_province}, {doctor.address_postal_code}
                                </a>
                            </div>
                            <div className="list__contact">
                                <h4 className="list__contact-title">Contact</h4>
                                <p className="list__phone">{doctor.phone_number}</p>
                            </div>
                        </div>
                        <h4 className={`list__status ${
                            doctor.status === "Accepting New Patients"
                            ? "list__status-accepting"
                            : "list__status-not-accepting"
                        }`}>
                            {doctor.status}
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default DoctorList;