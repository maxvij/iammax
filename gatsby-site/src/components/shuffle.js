import React from "react"
import PropTypes, {string} from "prop-types"

class Shuffle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTags: null
    }
  }

  toggleTag = (tag) => {
    let newTags = null;
    let oldTags = this.state.activeTags;
    if((oldTags != null)) {
      if(oldTags.indexOf(tag) > -1) {
        newTags = oldTags.filter(activeTag => activeTag !== tag);
      } else {
        oldTags.push(tag);
        newTags = oldTags;
      }
    } else {
      newTags = [tag];
    }
    this.setState({activeTags: newTags})
  }

  render() {
    return (
      <div className="shuffle">
        <ul className="tags">
          {this.props.tags.map((tag) => {
            return (
              <li className={(this.state.activeTags != null) ? (this.state.activeTags.indexOf(tag) > -1 ? "active" : "") : ""} onClick={this.toggleTag.bind(this, tag)}>{tag}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

Shuffle.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  cases: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string,
    })
  ).isRequired
}

export default Shuffle;
