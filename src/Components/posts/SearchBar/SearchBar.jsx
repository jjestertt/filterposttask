import React from "react";
import style from "./SearchBar.module.css"
import bgSearch from "./../../../assets/img/search.svg"

class SearchBar extends React.Component {
    state = {
        currentInputValue: '',
    };

    changeText = (e) =>{
        e.preventDefault();
        this.setState({currentInputValue: e.target.value});
        this.props.filterUsers(e.target.value);
    }

    render() {
        return (
            <section className={style.searchBar}>
                <div className="container">
                    <form action="" className={style.form}>
                        <input style={{backgroundImage: `url(${bgSearch})`}} onInput={this.changeText} value={this.currentInputValue} type="text" className={style.inputSearch} placeholder="Filter by author" pattern="[а-яА-ЯёЁ]+" required title="Можно использовать только кириллицу"/>
                    </form>
                </div>
            </section>
        )
    }
}

export default SearchBar