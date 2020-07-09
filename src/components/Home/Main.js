import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Nav from '../Base/Nav';
import Footer from '../Base/Footer'
import ScrollTop from '../Base/ScrollTop'
import Loading from './Loading'
import BlogContent from '../Blog/BlogContent'


const IndexComponent = (
    lazy(()=> (
        import ('./Index')
    ))
)

const AboutComponent = (
    lazy(() => (
      import('../About/About')
    ))
)
const SoftwareComponent = (
    lazy(() => (
      import('../Software/Software')
    ))
)
const ContactComponent = (
    lazy(() => (
      import('../Contact/ContactForm')
    ))
)
const BlogComponent = (
    lazy(() => (
      import('../Blog/BlogMainfunc')
    ))
)

const BlogPage = (
    lazy(() => (
        import('../Blog/BlogMain')
    ))
)

// const BlogContent = (
//     lazy(() => (
//         import('../Blog/BlogContent')
//     ))
// )

const LoadingMessage = () => (
    <Loading />
)
  

export default class Main extends Component {
    render() {
        return (
            <Router basename="/">
            <ScrollTop />
            <div style={{height: '100%'}}>
            <Nav />
                        <Switch>
                        <Route path="/blog/:title/" exact component={BlogContent} />
                        <Suspense fallback={<LoadingMessage />}>
                            <Route path="/" exact component={IndexComponent} />
                            <Route path="/about">
                                <AboutComponent />
                            </Route>
                            <Route path="/contact" exact component={ContactComponent} />
                            <Route path="/blog" exact component={BlogComponent} />
                            <Route path="/software" exact component={SoftwareComponent} />
                            <Route path="/MyBlogPage" exact component={BlogPage} />
                            </Suspense>
                        </Switch>
                <Footer />
            </div>
            </Router>
        )
    }
}
