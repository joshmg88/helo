select *
from posts
join helo_users on helo_users.id = posts.author_id
where posts.title like $1