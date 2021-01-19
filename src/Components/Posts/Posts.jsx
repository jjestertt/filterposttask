import React from "react"
import {connect} from "react-redux";
import Post from "./Post/Post";
import SearchBar from "./SearchBar/SearchBar";

class Posts extends React.Component {
    state = {
        posts: this.props.posts
    }

    filterUsers = (inputValue) => {
        if (inputValue !== "") {
            let filteredPost = this.props.posts
                .filter(post => post.name.toLowerCase().includes(inputValue.toLowerCase()));
            this.setState({posts: [...filteredPost]});
        } else {
            this.setState({posts: [...this.props.posts]});
        }
    }

    render() {
        //Get array posts from local state and convert this to JSX
        let posts = this.state.posts
            .map(post => <Post key={post.id} title={post.title} text={post.body} userName={post.name}/>);

        return (
            <div className="bg-light min-vh-100">
                <SearchBar filterUsers={this.filterUsers}/>
                <div className="container">
                    <div className="container">
                        <div className="card-columns">
                            {posts}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.app.posts,
    }
}

export default connect(mapStateToProps, {})(Posts);