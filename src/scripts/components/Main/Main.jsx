import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Article from './Article'
import Friend from './Friend'

export default withRouter((props) => {
    const pageID = {
        "/": "01",
        "/about": "02",
        "/article": "03",
        "/friend": "04"
    },
        pageArray = ["/", "/about", "/article", "/friend"]

    let currentPageID = pageID["/"],
        nextPage = "/about"

    const handleLocationChange = () => {
        let currentLocationPath = location.pathname

        switch (currentLocationPath) {
            case "/":
                currentPageID = pageID["/"]; nextPage = pageArray[1]
                break
            case "/about":
                currentPageID = pageID["/about"]; nextPage = pageArray[2]
                break
            case "/article":
                currentPageID = pageID["/article"]; nextPage = pageArray[3]
                break
            case "/glory":
                currentPageID = pageID["/glory"]; nextPage = pageArray[0]
                break
            default:
                currentPageID = pageID["/"]; nextPage = pageArray[0]
        }
    }

    handleLocationChange()

    const routePage = () => {
        props.history.push(nextPage)
        handleLocationChange()
    }

    return (
        <div className="main">
            <div className="_welcome">
                <div className="welcome__id">
                    <div className="id">
                        {currentPageID}
                    </div>
                    <div className="_line" />
                </div>
                <div className="welcome__text">
                    WELCOME
                </div>
            </div>
            <div className="_links">
                <a className="link__item" href="/">
                    Home
                </a>
                <span>/</span>
                <a className="link__item" href="https://wiki.vidar.club/" target="_blank">
                    Wiki
                </a>
                <span>/</span>
                <a className="link__item" href="http://www.luelueking.com/" target="_blank">
                    旧版博客
                </a>
            </div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/article" component={Article} />
                <Route exact path="/friend" component={Friend} />
                <Route component={Home}/>
            </Switch>
            <button className="_next" onClick={routePage} />
        </div>
    )
})
