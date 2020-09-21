import Header from '../components/Header'
import Filter from '../components/Filter'
import Calendar from '../components/Calendar'

export default function Workspace() {
    return (
        <div className="workspace">
            <div id="workspace--col">
                <Header />
                <Filter />
                <Calendar />
            </div>

            <style jsx>{`
                .workspace {
                    flex: 1 0;
                  }
                
                #workspace--col {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}