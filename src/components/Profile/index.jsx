import React from "react";
import "./style.css";

export default ({user}) => {
    if (!user)
    {
        return <div className="profile_wrapper">
            <h1>Вы не авторизованы</h1>
        </div>
    }

    return <div className="profile_wrapper">
        <h1>Профиль</h1>
        <div>Ваше пользователя: {user}</div>
    </div>
}