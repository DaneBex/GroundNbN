import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, Link, useHistory } from "react-router-dom"
import { deleteListing, populatePlaces } from "../../store/place"
import EditHostForm from "../EditHostForm"
import './HomePage.css'


export default function HomePage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const placesObj = useSelector((state) => state.place)
    const history = useHistory()
    const places = Object.values(placesObj)

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
                <div id="home-page-left">
                <h1 id="welcome-to-home">Welcome to GroundNbN!</h1>
                <p id="little-text">Find a spot to stay or host your own place for others</p>
                <Link id='post-place' to='/host'>Host</Link>
                </div>
                <div id="home-page-right">
                    <h2>No Matter the budget or location</h2>
                    <p id="little-text">Find the perfect spot for you</p>
                    <form id="home-page-typeof">
                        <div id="country-specific">
                        <label id="country-label">Country</label>
                        <select id="country-select">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                        </div>
                        <div id="price-specific">
                        <label id="price-label">Max Price:</label>
                        <input id="price-input" type='number'></input>
                        </div>
                        <button id="specifics-button">Find Place</button>
                    </form>
                </div>
            </div>
            <div id="places">
                {places && places.map(place => (
                    <div key={place.id} className="listing-box">
                        <img onClick={() => takeToPage(place.id)} className="listing-photos" key={place.image} src={place.image}></img>
                        <h2 onClick={() => takeToPage(place.id)} key={place.name}>{place.name}</h2>
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
