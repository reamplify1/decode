function deleteBlog(id, userID){
	const data = axios.delete(`/api/blogs/${id}`)
	.then(data => {
		if(data.status == 200){
			location.replace(`/my-blog/${userID}`)
		}else if(data.status == 400){
			window.location('/not-found')
		}
	})
}