import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, Link, useHistory } from "react-router-dom"
import { deleteListing, populatePlaces, populateSpecificPlaces } from "../../store/place"
import EditHostForm from "../EditHostForm"
import './HomePage.css'


export default function HomePage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const placesObj = useSelector((state) => state.place)
    //let originalPlaces = Object.values(placesObj)
    const history = useHistory()


    const [maxPrice, setMaxPrice] = useState('')
    const [country, setCountry] = useState('United States');
    const [places, setPlaces] = useState([])
    const [allPlaces, setAllPlaces] = useState([])


    useEffect(() => {
        dispatch(populatePlaces())

    }, [dispatch])

    useEffect(() => {
        setPlaces(Object.values(placesObj))
        setAllPlaces(Object.values(placesObj))
    }, [placesObj])


    const takeToPage = (id) => {
        return history.push(`/places/${id}`)
    }

    let newTypePage = (e) => {
        e.preventDefault();
        console.log('placesObj: ', placesObj)
        console.log('places: ', places)
        //console.log('places:', places, 'country:', country, 'maxPrice:', maxPrice)
        if (country && maxPrice) {
            setPlaces(allPlaces.filter(place => {
                return (place.country === country && parseInt(place.price) <= maxPrice)
            }))
        }
        if (!maxPrice) {
            setPlaces(allPlaces.filter(place => {
                return place.country === country
            }))
        }
    }
    // console.log('places after change:', places)

    if (!sessionUser) return <Redirect to='/signup' />

    console.log(places)

    const HomePage = () => {
        if (places.length > 0) {
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
                            <form onSubmit={newTypePage} id="home-page-typeof">
                                <div id="country-specific">
                                    <label id="country-label">Country</label>
                                    <select
                                        value={country}
                                        onChange={e => setCountry(e.target.value)}
                                        id="country-select">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                                <div id="price-specific">
                                    <label id="price-label">Max Price:</label>
                                    <input
                                        autoFocus
                                        value={maxPrice}
                                        onChange={e => setMaxPrice(e.target.value)}
                                        id="price-input" type='number'></input>
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
        } else return (
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
                <form onSubmit={newTypePage} id="home-page-typeof">
                    <div id="country-specific">
                        <label id="country-label">Country</label>
                        <select
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            id="country-select">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                    </div>
                    <div id="price-specific">
                        <label id="price-label">Max Price:</label>
                        <input
                            value={maxPrice}
                            autoFocus='autoFocus'
                            onChange={e => setMaxPrice(e.target.value)}
                            id="price-input" type='number'></input>
                    </div>
                    <button id="specifics-button">Find Place</button>
                </form>
            </div>
        </div>
        <div id="noPlaceFound">
        <h1>No Places Found</h1>
        <p>Search again or go</p>
        <button id="noPlaceFoundButton" onClick={() => setPlaces(allPlaces)}>Home</button>
        </div>
       </>
        )
    }

    return <HomePage />;
}
