import React from 'react'
import { Button } from '../components/Button'
import { Divizinha } from ' ../components/Divizinha'

const App = () => {
    return (
        <>
            <h1>Automatização de JS</h1>
            <Button type="clear" data-fruta="banana">Clique-me</Button>
            <Divizinha></Divizinha>

        </>
    )
}

export { App }