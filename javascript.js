$(document).ready(function(){
    var searchTerm = "North Korea"
    // var searchTerm = $("#searchTerm").val().trim();
    var startYear = 20180601;
    // var startYear = parseInt($("#startYear").val() + "0101");
    var endYear = 20180723;
    // var endYear = parseInt($("#endYear").val() + "0727");
    // var recordNumber = 5;
    var recordNumber = $("#recordNumber").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
    'api-key': "1cb66c9687ab49168789500dc5b56141",
    'q': searchTerm,
    'begin_date': startYear,
    'end_date': endYear
    });
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data){
        var articles = data.response.docs;
        $("#searchButton").click(function(){
            event.preventDefault();
            console.log("clicked");
            for (var i = 0; i < recordNumber ; i++){
                var articleDiv = $("<div class='articeDiv'>").text(articles[i].headline.main);
                var articleSource = $("<p class='articleSource'>").text(articles[i].source);
                articleDiv.append(articleSource);
                $("#article-container").prepend(articleDiv);
            }
        });
        $("#clearResults").click(function(){
            event.preventDefault();
            $("#article-container").empty();
        })
    });
});
