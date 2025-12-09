import { Menulist, ItemMovie } from "../../components/UI";
import InfomationText from "../../components/UI/inFomationText/infomationText";
import { Films, } from "../../../src/ApiClone/Databases";
import Movie_List_PageChil from "../Movie_List_Page/Movie_List_PageChil/Movie_List_PageChil";


function HomePage() {

    return (
        <div className="min-h-full">
            <Movie_List_PageChil Films={Films} />
        </div>
    );
}

export default HomePage;
