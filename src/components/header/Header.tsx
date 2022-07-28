import React from 'react';
import style from './Header.module.css'
export const Header = () => {
    return (
        <div className="container">
            <div className={style.headerWrapper}>
                <div className={style.title}>
                    Header
                </div>
                <div className={style.navBar}>
                    <div className={style.navItem}><a href=''>Главная</a></div>
                    <div className={style.navItem}><a href=''>Скиллы</a></div>
                    <div className={style.navItem}><a href=''>Работы</a></div>
                    <div className={style.navItem}><a href=''>Контакты</a></div>
                </div>
            </div>
        </div>
    );
};

