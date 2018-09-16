import React from 'react'
import Link from 'Components/Link'

class Test extends React.Component {
    static title = 'Тестовая страница'
    render() {
        return (
            <>
                <Link to="test2">Go to the test2 page!!!</Link>
                <h1>Hello World!</h1>
            </>
        )
    }
}

export default Test