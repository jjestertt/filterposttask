import React from "react";
import style from "./SearchBar.module.css"
import bgSearch from "./../../../assets/img/search.svg"

class SearchBar extends React.Component {
    state = {
        currentInputValue: '',
    };

    changeText = (e) =>{
        this.setState({currentInputValue: e.target.value});
        this.props.filterUsers(e.target.value);
    }

    render() {
        return (
            <section className={style.searchBar}>
                <div className="container">
                    <form onSubmit={(e) => {e.preventDefault();}} action="" className={style.form}>
                        <input style={{backgroundImage: `url(${bgSearch})`}}
                               onInput={this.changeText} value={this.currentInputValue}
                               type="text" className={style.inputSearch} placeholder="Filter by author..."
                        />
                    </form>
                </div>
            </section>
        )
    }
}

export default SearchBar