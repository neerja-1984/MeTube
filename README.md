1) download of RapidAPI ext in VSCode
2) will be using Material UI --> dowload required dependencies [paper / icons / box ..etc]
3) BrouserRouter / Routes /Route usage
4) ReactPlayer for playing videos

4) Constants.js --> required @mui logos / icons
5) using useNavigate --> to navigate to other routes

6) using axios to make GET request from api
7) using RapidAPI to fetch from server

8) understanding parts of URL fetched from API
    `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}`

    Means :
        1) https://youtube-v31.p.rapidapi.com/ : base url 
        2) search : getting the endpoint form url
        3) part=snippet : API should return only the snippet part of the response[ includes basic information about the search results.]
        4) q=${selectedCategory} : query == selectedCategory , ie if selectedCategory == technology ; include only technology results

    `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date`

    Means : 
        URL-encoded TIPS : [%20 : space /  %2C :  comma (,)]
        1) search : API endpoint
        2) channelId=${id} : get the Channel whose id is as in ${id}
        3) part=snippet%2Cid : we want to retrieve the "snippet" and "id" parts of the search results. ie [snippet , id]
        4) order=date :  order the search results by date, showing the most recent videos first.

9) using hooks such as :
-useState / useEffect / useNavigate / useParams 