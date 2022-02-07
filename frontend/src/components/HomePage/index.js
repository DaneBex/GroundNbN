import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, Link, useHistory } from "react-router-dom"
import { deleteListing, populatePlaces } from "../../store/place"
import EditHostForm from "../EditHostForm"
import './HomePage.css'


export default function HomePage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const places = useSelector((state) => state.place.place)
    const history = useHistory()


    useEffect(() => {
        dispatch(populatePlaces())

        console.log('happened')
    }, [dispatch])

    const takeToPage = (id) => {
        console.log(id)
     return history.push(`/places/${id}`)
    }


    if (!sessionUser) return <Redirect to='/signup' />
    return (
        <>
            <div id="home-page-welcome">
                <h1>Welcome to GroundNbN!</h1>
                <p id="little-text">Find a spot to stay or host your own place for others</p>
                <Link id='post-place' to='/host'>Host</Link>
            </div>
            <div id="places">
                {places && places.map(place => (
                    <div onClick={() => takeToPage(place.id)} key={place.id} className="listing-box">
                        <img className="listing-photos" key={place.image} src={place.image}></img>
                        <h2 key={place.name}>{place.name}</h2>
                        {sessionUser.id === place.userId &&
                        <div className="owner">
                        <Link className="edit-button" to={`places/${place.id}/edit`}>Edit</Link>
                        <p onClick={() => dispatch(deleteListing(place.id))} className="delete-button">Delete</p>
                        </div>
                        }
                        <p id="price">{`$${place.price}/ night`}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
