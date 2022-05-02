import React, { Component } from "react";

export default class Count extends Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: false,
            disliked: false,
            initLike: 0,
            initDislike: 25,
        };

        this.onLikeClick = this.onLikeClick.bind(this);
    }
    onLikeClick() {
        if (!this.state.disliked) {
            this.setState({
                liked: !this.state.liked,
            });
        } else {
            this.setState({
                liked: true,
                disliked: false,
            });
        }
    }
    render() {
        return (
            <div>
                Count
                <button className="" onClick={this.onLikeClick}>
                    Like |
                    <span className="likes-counter">
                        {this.state.liked
                            ? this.state.initLike + 1
                            : this.state.initLike}
                    </span>
                </button>
            </div>
        );
    }
}
