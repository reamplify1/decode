function sendComment(e){
	e.preventDefault()
	const commentText = document.querySelector('#comment-text').value
	const user = document.querySelector('#comment_user').value
	const blog = document.querySelector('#comment_blog').value
	// console.log(user, "1111");
	// console.log(blog, '2222');
	if(commentText.length > 0){
		axios.post('/api/comments', {text: commentText, authorId: user, blogId: blog}).then(data =>{
			if(data.data){
				location.reload()
				// console.log(data);
			}
		})
	} else {
		alert('Комментарий должен быть заполнен')
	}

}