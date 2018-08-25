let Title = true;
let Content = true;

fb.ref("Posts").once('value').then(data => {
    let Posts = data.val();
    Posts.forEach(post => {
        $('#oldPosts').append('<h4>' + post.title + '</h4>' + '<p>' + post.content + '<p>');
    })
});

$('#submit').on('click', function () {
    if ($('input').val() === "") {
        alert('Please enter title!');
        Title = false;

    };
    if ($('#PostText').val() === "") {
        alert('Please enter text!');
        Content = false;
    };
    if (Title && Content) {
        fb.ref("Posts").once('value').then(data => {
            let Posts = data.val();
            fb.ref('Posts/' + Posts.length).set({ title: $('input#PostTitle').val(), content: $('textarea#PostText').val() });
            $('#oldPosts').append('<h4>' + $('input#PostTitle').val() + '</h4>' + '<p>' + $('textarea#PostText').val() + '<p>');
        });
    };

});