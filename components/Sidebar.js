import logo from "../images/logo.png"
import lessons from "../images/ic24-calendar-select-day.png"
import users from "../images/ic24-user.png"
import tutors from "../images/ic24-book.png"
import finances from "../images/ic24-ruble.png"
import abonement from "../images/ic24-ticket.png"
import crm from "../images/ic24-flag.png"
import mail from "../images/ic20-email.png"
import reports from "../images/ic24-chart-bar.png"
import settings from "../images/ic24-settings.png"
import chooseline from "../images/chooseline.svg"
import hide from "../images/hide.png"

export default function SideBar() {
    return (
        <div className="sidebar">
            <div id="sidebar--header">
                <div id="sidebar--header-logo">
                    <img src={logo}></img>
                </div>
                <div id="sidebar--header-hide">
                    <img src={hide}></img>
                </div>
            </div>
            <hr id="sidebar-hr"></hr>
            <div id="sidebar-content">
                <div className="menupoint">
                    <img src={lessons}></img>
                    <p className="menutext">Занятия</p>
                </div>
                <div className="menupoint">
                    <img src={users}></img>
                    <p className="menutext">Учащиеся</p>
                </div>
                <div className="menupoint choosen">
                    <img src={chooseline} id="chooseline"></img>
                    <img src={tutors}></img>
                    <p className="menutext chtext">Тренеры</p>
                </div>
                <div className="menupoint">
                    <img src={finances}></img>
                    <p className="menutext">Финансы</p>
                </div>
                <div className="menupoint">
                    <img src={abonement}></img>
                    <p className="menutext">Абонементы</p>
                </div>
                <div className="menupoint">
                    <img src={crm}></img>
                    <p className="menutext">Доступ в CRM</p>
                </div>
                <div className="menupoint">
                    <img src={mail}></img>
                    <p className="menutext">Рассылки</p>
                </div>
                <div className="menupoint">
                    <img src={reports}></img>
                    <p className="menutext">Рассылки</p>
                </div>
                <div className="menupoint">
                    <img src={settings}></img>
                    <p className="menutext">Настройки</p>
                </div>
            </div>

            <style>{`  
                .sidebar {
                    width: 210px;
                    background: #FFFFFF;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                #sidebar--header {
                    display: flex;
                    align-item: flex-start;
                }
                
                #sidebar--header-logo {
                    display: inline-block;
                    margin-top: 30px;
                    margin-left: 25px;
                }

                #sidebar--header-hide {
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    margin-left: 4px;
                    margin-top: 30px;
                }

                .menupoint {
                    height: 45px;
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    min-width: 210px;
                }

                .menupoint img {
                    margin-left: 30px;
                    width: 13px;
                    height: 13px;
                }

                .menupoint:hover {
                    background: #EDF0F5;
                }

                #sidebar-content {
                    margin-top: 40px;
                }

                .menutext {
                    display: inline;
                    margin-left: 11px;
                }

                .choosen {
                    background: #EDF0F5;
                    color: #000000;
                    outline-left: 3px solid black;
                }

                .choosen img {
                    margin-left: 27px;
                }

                #chooseline {
                    width: 3px;
                    height: 45px;
                    background: black;
                    align-self: flex-start;
                    margin: 0px;
                    background: transparent;
                }
            `}</style>
        </div>
    )
}