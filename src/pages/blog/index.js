import React from "react"

import {Link} from "gatsby";
import Tags from "../../components/tags";

class BlogPage extends React.Component {
    render() {
        return <>
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
        </>

    }
}

export default BlogPage
