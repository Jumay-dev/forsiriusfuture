import bell from "../images/bell.png"
import userpic from "../images/userpic.svg"
import search from "../images/ic20-search.png"

export default function Header() {
    return (
        <div id="workspace--header">
            <div id="workspace--header-search">
                <img src={search}></img>
                <input type="text" id="search" placeholder="Искать клиента"></input>
            </div>
            

            <div id="userid">
                <img src={bell} id="bell"></img>
                <div id="line"></div>
                <p id="username">Alexander Gerasimuk</p>
                <img src={userpic} id="userpic"></img>
            </div>

            <style jsx>
                {`
                    #workspace--header {
                        display: flex;
                        justify-content: space-between;
                        flex-direction: row;
                        width: 1170px;
                        margin-top: 30px;
                    }

                    #workspace--header-search {
                        display: flex;
                        align-items: center;
                    }

                    #workspace--header-search img {
                        display: inline-block;
                        position: absolute;
                        margin-left: 15px;  
                    }

                    #search {
                        width: 450px;
                        height: 43px;
                        padding-left: 35px;
                        border: none;
                        outline: none;
                        background: #FFFFFF;
                        border-radius: 43px;
                    }

                    #userid {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    #line {
                        display: inline-block;
                        margin-right: 15px;
                        margin-left: 15px;
                        width: 1px;
                        height: 43px;
                        background: rgba(0, 0, 0, 0.1);
                    }

                    #username {
                        display: inline;
                        margin-right: 10px;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 17px;
                    }

                    #userpic {
                        display: inline-block;
                        width: 43px;
                        height: 43px;
                        border-radius: 33px;
                    }
                `}
            </style>

        </div>
    )
}