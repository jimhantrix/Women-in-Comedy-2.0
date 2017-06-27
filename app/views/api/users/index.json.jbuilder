json.array! @users.do |user|
	json.id user.id
	json.email user.email
	json.encrypted_password user.encrypted_password
	json.reset_password_token user.reset_password_token
	json.reset_password_sent_at user.reset_password_sent_at
	json.remember_created_at user.remember_created_at
	json.sign_in_count user.sign_in_count
	json.current_sign_in_at	user.current_sign_in_at
	json.last_sign_in_at user.last_sign_in_at
	json.current_sign_in_ip user.current_sign_in_ip
	json.last_sign_in_ip user.last_sign_in_ip
	json.created_at user.created_at
	json.updated_at user.updated_at
	json.admin user.admin
	jason.super_admin user.super_admin
	json.first_name user.first_name
	json.last_name user.last_name
	json.birthday user.birthday
	json.about user.about
	json.avatar user.avatar
	json.video_link user.video_link
	json.location user.location
	json.website user.website
	json.training user.training
	json.experience user.experience

			json.comments user.comments.each do |comment|
				json.commenter_id comment.commenter_id
				json.commentable_type comment.commentable_type
				json.commentable_id comment.commentable_id
				json.comment
			end
end

