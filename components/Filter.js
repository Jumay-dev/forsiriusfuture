import plus from "../images/ic24-plus.svg"
import filter from "../images/ic24-filter.svg"
import lessons from "../images/less.png"
import list from "../images/list.png"
import book from "../images/ic24-book (1).png"

export default function Filter() {
    return (
        <div id="workspace--filter">
            <div className="block">
                <button className="lbutton pad">Неделя</button>
                <button className="lbutton pad disabled">День</button>
            </div>
            <div className="block">
                <div id='flexblock'>
                    <button className="rbutton success pad">
                        <img src={plus}></img>
                        <p>Добавить</p>
                    </button>
                    <button className="rbutton filterbutton pad">
                        <img src={filter}></img>
                        <p>Фильтр</p>
                    </button>
                    <div id="viewmode" className="rbutton">
                        <div className="viewmode-button">
                            <img src={list}></img>
                        </div>
                        <div className="viewmode-button">
                            <img src={lessons}></img>
                        </div>
                        <div className="viewmode-button currentview">
                            <img src={book}></img>
                        </div>
                    </div>                    
                </div>
            </div>


        <style jsx>{`
            #workspace--filter {
                display: flex;
                justify-content: space-between;
                width: 1170px;
                margin-top: 30px;
            }

            #viewmode {
                width: 129px;
                display: flex;
                align-items: center;
            }

            .viewmode-button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 43px;
                height: 43px;
                border-radius: 50%;
                margin: 0;
            }

            .viewmode-button img {
                display: inline;
            }

            .currentview {
                background: #2E71F3;
            }
            
            .pad {
                padding: 15px;
            }

            .lbutton {
                display: inline-block;
                box-sizing: border-box;
                width: 76px;
                height: 43px;
                background: #FFFFFF;
                margin-right: 10px;
                border-radius: 4px;
                border: none;
                outline: none;

            }

            .rbutton {
                display: flex;
                height: 43px;
                border-radius: 30px;
                border: none;
                outline: none;
                margin-right: 10px;
                background: #FFFFFF;
                align-items: center;
            }

            .rbutton img {
                display: inline-block;
                margin-right: 5px;

            }

            .rbutton p {
                display: inline-block;
            }


            .success {
                background: #52AD5B;
                color: #FFFFFF;
            }

            .disabled {
                background: transparent;
                border: 1px solid rgba(0, 0, 0, 0.1);
            }

            .rbutton:nth-last-child(1) {
                margin-right: 0px;
            }

            .block {
                display: inline-block;
                height: 43px;
            }

            #flexblock {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        `}</style>
        </div>
    )
}