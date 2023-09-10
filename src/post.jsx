import './post.css'
export default function Post({post}){
    const { title, body, id , userId} = post;
    return (
        <div className='post'>
            <h5>Title: {title} </h5>
            <p><small>userId: {userId} </small></p>
            <p><small>postId: {id} </small></p>
            <p></p>
        </div>
    )
}