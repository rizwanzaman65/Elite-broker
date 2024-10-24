
//call this function after page load
$(window).on('load', function () {
    loadrecentBlogPost(2);
});

function convertDate(dateTime){

	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	try
	{
		var dt = new Date(dateTime); 
		var day = dt.getDate(),
		month = dt.getMonth(),
		year = dt.getFullYear(),
		hours = dt.getHours(),
		minutes = dt.getMinutes(),
		seconds = dt.getSeconds();
		return (monthNames[month] + " " + day + ', ' + year);
	}
	catch(e)
	{
		return "";
	}
}

//this function will take of calling the API
function loadrecentBlogPost(numberOfPost) {
    $.ajax({
        type: 'GET',
        url: '/blog/latest-post?numberOfPost=' + numberOfPost,
        data:'',
        success: function (data) {
            if (data.success) {

                var postHtml = '';
                var posts = data.posts || [];
                if (posts && posts.length > 0) {
                    for (var i = 0; i < posts.length; i++) {
                        postHtml += `
                      <div class="news-content">
                           <p>
                              <a href="${posts[i].slug}" class="text-white">${posts[i].title}</a>
                           </p>
                           <span>${convertDate(posts[i].postDate)}</span>
                        </div> 
                        `;

                    }
                }

                $('#recent-blog-post-repeater').html(postHtml);
            }
        },
        error: function (req, error) {
            //log error
            console.log(req.responseText);
        },
        beforeSend: function (data) {
            //show loading message if any
            //$('#your_html_tag_id').text('Loading post...');
        }
    });
}
