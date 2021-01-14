import './App.css';
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Posts from "./Components/posts/Posts";

const App = (props) => {

  props.initializeApp();
  if(!props.isInitialize){
    return null
  }
  return <Posts />
}
let mapStateToProps = (state) => {
  return {
    isInitialize: state.app.initialized
  }

}
export default connect(mapStateToProps,{initializeApp})(App);