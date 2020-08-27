import PropTypes from "prop-types"
import React from "react"

const Tags = ({tags}) => (
    <ul className="tags">
        {tags.map(tag => {
            return <li>{tag}</li>
        })}
    </ul>
)

Tags.propTypes = {
    tags: [
        PropTypes.string
        ],
}

Tags.defaultProps = {
    tags: [],
}

export default Tags
