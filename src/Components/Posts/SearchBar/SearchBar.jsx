import React from "react";
import style from "./SearchBar.module.css"
import bgSearch from "./../../../assets/img/search.svg"

class SearchBar extends React.Component {
    state = {
        currentInputValue: "",
    };

    changeText = (e) => {
        this.setState({currentInputValue: e.target.value});
        this.props.filterUsers(e.target.value);
    }

    render() {
        return (
            <section className={style.searchBar}>
                <nav className="navbar navbar-light bg-light d-block">
                    <div className="container d-block d-lg-flex justify-content-center">
                        <form className="d-flex row col-lg-4"
                              onSubmit={(e) => {
                                  e.preventDefault();
                              }}
                        >
                            <div className="input-group ">
                                <span className="input-group-text bg-body" id="basic-addon1">
                                    <img src={bgSearch} alt=""/>
                                </span>
                                <input type="search" className="form-control"
                                       onInput={this.changeText} value={this.currentInputValue}
                                       placeholder="Filter by author..." aria-label="search"
                                       aria-describedby="basic-addon1"/>
                            </div>
                        </form>
                    </div>
                </nav>
            </section>
        )
    }
}

export default SearchBar;