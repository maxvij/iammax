import React from "react"

import {Link} from "gatsby";
import Tags from "../../components/tags";

class BlogPage extends React.Component {
    render() {
        return <section className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Latest blog articles</h2>
                        <p className="subtitle">Sometimes I like to write</p>
                    </div>
                </div>
                <Link to="/blog/2021/1-day-redesign-spotify">
                    <div className="blog-panel color-spotify">
                        <div className="cross-bar"></div>
                        <div className="row">
                            <div className="col-12">
                                <h3>One-day redesign: Spotify streaming app.</h3>
                                <p className="date">Jan 20th, 2021</p>
                                <Tags tags={["App design", "Animation", "Redesign"]} />
                                <p className="paragraph">
                                    In the 'one-day redesign' series I redesign a existing application with some new creativity. This time, I redesigned the all-so-popular Spotify music streaming application.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    }
}

export default BlogPage
