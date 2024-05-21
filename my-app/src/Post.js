import React, { useEffect, useState } from "react";

const Post = ({ page }) => {

    const [postData, setPostData] = useState([])

    useEffect(() => {
        // setTimeout(
        //     () => {
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${page}`)
                    .then((response) => response.json())
                    .then((json) => setPostData(json))
            // }, 500)
               
        // return () => {
        //     setPostData({ id: "", title: "Loading Data", body: "" })
        // }

    }, [page])

    return (
        <div>
            {postData.map(item =>
                <div className='item' key={item.id}>
                    <p>PostId - {item.postId}</p>
                    <h1>Name -{item.name}</h1>
                    <p>Email - {item.email}</p>
                    <p>Text - {item.body}</p>
                    <p>ID - {item.id}</p>
                </div>)
            }






            {/* <h1>{postData.title}</h1>
            <p>{postData.body}</p>
            <p>{postData.id}</p> */}
        </div>
    )
}

export default Post;