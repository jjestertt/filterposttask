import style from "./Post.module.css"

const Post = (props) => {
    return (
        // <div className="col-lg-4 col-md-6  col-sm-12">
        //     <li className={style.postsItem}>
        //         <h3 className={style.postsItemTitle}>{props.title}</h3>
        //         <p className={style.postsItemText}>{props.text}</p>
        //         <span className={style.postsItemAuthor}>{props.userName}</span>
        //     </li>
        // </div>

            <div className="card">
                <div className="card-body ">
                    <h5 className="card-title text-primary">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <p className="card-text"><small className="text-muted">{props.userName}</small></p>
                </div>
            </div>
    )
}

export default Post;