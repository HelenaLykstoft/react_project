import React, {useState} from 'react';

function ReservationForm(props) {
    const initialValue = {
        firstName: "",
        lastName: "",
        email: "",
        payByCreditCard: true
    }
    const [reservation, setReservation] = useState(initialValue);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(reservation);
        setReservation(initialValue);
    }

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const isChecked = target.checked;
        setReservation({...reservation, [name]: value, payByCreditCard: isChecked});
    }

    return (
        <div className="container">
            <h1>React Form</h1>
            <div className="form-group">
                <label className="form-check-label" htmlFor="firstName">First name: </label>
                <input
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={reservation.firstName}
                    onChange={handleChange}
                    placeholder="First name here!"
                />
            </div>
            <div className="form-group">
                <label className="form-check-label" htmlFor="lastName">Last name: </label>
                <input
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={reservation.lastName}
                    onChange={handleChange}
                    placeholder="Last name here!"
                />
            </div>
            <div className="form-group">
                <label className="form-check-label" htmlFor="email">Email: </label>
                <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    value={reservation.email}
                    onChange={handleChange}
                    placeholder="Email here!"
                />
            </div>
            <div className="form-group">
                <label className="form-check-label" htmlFor="payBy">Paying method: </label>
                <input
                    className="form-control"
                    id="payBy"
                    name="payByCreditCard"
                    type="checkbox"
                    checked={reservation.payByCreditCard}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>
        </div>
    );
}

export default ReservationForm;