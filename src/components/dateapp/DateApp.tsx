import React, { useState } from 'react';

export const DateApp: React.FC = () => {
    const [date, setDate] = useState ("");

    const btnShowHandler = () => {
        setDate(new Date().toISOString());
    };

    const btnReloadHandler = () => {
        setDate(new Date().toISOString());
    };

    const btnRemoveHandler = () => {
        setDate((date: any) => "");
    };

    return (
        <div>
            <h2>{date}</h2>
            <button onClick={btnShowHandler}>Показать дату:</button>
            <br></br>
            <button onClick={btnReloadHandler}>Обновить дату:</button>
            <br></br>
            <button onClick={btnRemoveHandler}>Убрать дату:</button>
        </div>
    );
};