
import React from 'react'
import { useRouteError } from 'react-router-dom'
import Navbar from '../components/Navbar'

function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <h1>Whoops! Something went wrong!</h1>
            </main>
        </>
    )
}

export default ErrorPage
