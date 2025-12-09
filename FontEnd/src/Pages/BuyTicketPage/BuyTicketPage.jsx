import { useEffect } from "react";
import { useParams } from "react-router-dom";

function BuyTicketPage() {
    const { slug } = useParams();
    const [film, setFilm] = useState(null);
    useEffect(() => {
        setFilm()
    }, [slug])
    return (
        <>

        </>
    );
}

export default BuyTicketPage;