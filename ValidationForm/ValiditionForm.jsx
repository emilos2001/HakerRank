import './style.css'
import { useEffect, useState } from "react";

const errors = {
    nameError: 'Name must contain at least 4 characters long and contain letters and spaces.',
    emailError: 'Email must be a valid email address.',
    idError: 'Employee id must be exactly 6 digits.',
    joiningDataError: 'Joining date cannot be in the future'
};

export function ValidationForm() {
    const todayStr = new Date().toISOString().split('T')[0];

    const [info, setInfo] = useState({
        name: '',
        email: '',
        employeeId: '',
        joiningDate: todayStr
    });

    const [clicked, setClicked] = useState(false);
    const [isError, setIsError] = useState(false);
    const [fieldError, setFieldError] = useState({});

    useEffect(() => {
        const timer = setTimeout(() => {
            setClicked(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [clicked]);

    const setName = (e) => {
        const nameValue = e.target.value;
        setInfo(prev => ({ ...prev, name: nameValue }));
    };
    const setEmail = (e) => {
        const email = e.target.value;
        setInfo(prev => ({ ...prev, email: email }));
    };

    const setEmployeeId = (e) => {
        const idValue = e.target.value;
        setInfo(prev => ({ ...prev, employeeId: idValue }));
    };

    const setJoiningDate = (e) => {
        const selectedDateStr = e.target.value;
        setInfo(prev => ({ ...prev, joiningDate: selectedDateStr }));
    };
    const errorsLine = () => {
        const activeErrors = {};
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!info.name || !nameRegex.test(info.name) ||
            info.name.trim().length < 4) {
            activeErrors.name = errors.nameError;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!info.email || !emailRegex.test(info.email)) {
            activeErrors.email = errors.emailError;
        }
        const idRegex = /^\d{6}$/;
        if (!info.employeeId || !idRegex.test(info.employeeId)) {
            activeErrors.employeeId = errors.idError;
        }
        if (!info.joiningDate || info.joiningDate > todayStr) {
            activeErrors.joiningDate = errors.joiningDataError;
        }
        return activeErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const currentErrors = errorsLine();
        setFieldError(currentErrors);
        setIsError(Object.keys(currentErrors).length > 0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={info.name}
                        onChange={(e) => setName(e)}
                    />
                    {isError && fieldError.name && (
                        <p className="errors">
                            {fieldError.name}
                        </p>
                    )}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="text"
                        value={info.email}
                        onChange={(e) => setEmail(e)}
                    />
                    {isError  && fieldError.email && (
                        <p className="errors">
                            {fieldError.email}
                        </p>
                    )}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Employee ID"
                        value={info.employeeId}
                        onChange={(e) => setEmployeeId(e)}
                    />
                    {isError && fieldError.employeeId && (
                        <p className="errors">
                            {fieldError.employeeId}
                        </p>
                    )}
                </div>
                <div>
                    <input
                        type="date"
                        name="joiningDate"
                        value={info.joiningDate}
                        onChange={(e) => setJoiningDate(e)}
                    />
                    {isError && fieldError.joiningDate && (
                        <p className="errors">
                            {fieldError.joiningDate}
                        </p>
                    )}
                </div>
                <button data-testid="submit-btn" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}