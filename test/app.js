$(function () {
    var form22 = document.getElementById('Search');
    form22.addEventListener("click", Show1, true);
    function Show1(e) {
        var inputValue = document.getElementById('titler').value;
        var list_Type = document.getElementById('list_Type').value;
        var params = new URLSearchParams({
            s: inputValue,
            type: list_Type,
            apikey: '30ce141',
        }).toString();
        var url = "http://www.omdbapi.com/?".concat(params);
        $.getJSON(url, function (data) {
            var x = data.totalResults;
            if (x == undefined) {
                $("#Movie_not_found").text("Movie not found!!!");
            }
            else {
                $("#Movie_not_found").text("");
            }
            var y = x / 10;
            var tr_btn = document.getElementById('tr_btn');
            for (var i = 0; i < y; i++) {
                var id = i + 1;
                var td1 = document.createElement("td");
                var input = document.createElement("input");
                input.addEventListener("click", Show3, true);
                input.setAttribute('type', 'button');
                input.setAttribute('id', id.toString());
                input.setAttribute('class', 'button');
                input.setAttribute('value', id.toString());
                td1.appendChild(input);
                tr_btn.appendChild(td1);
            }
            for (var i = 0; i < 10; i++) {
                var div1 = document.getElementById('div1');
                var div2 = document.getElementById('div2');
                var form = document.createElement("form");
                var table = document.createElement("table");
                var tbody = document.createElement("tbody");
                var tr1 = document.createElement("tr");
                var td1 = document.createElement("td");
                var tr2 = document.createElement("tr");
                var td2 = document.createElement("td");
                var tr3 = document.createElement("tr");
                var td3 = document.createElement("td");
                var tr4 = document.createElement("tr");
                var td4 = document.createElement("td");
                var tr5 = document.createElement("tr");
                var td5 = document.createElement("td");
                var tr6 = document.createElement("tr");
                var td6 = document.createElement("td");
                var img = document.createElement("img");
                var span1 = document.createElement("span");
                var span2 = document.createElement("span");
                var span3 = document.createElement("span");
                var span4 = document.createElement("span");
                var input = document.createElement("input");
                input.addEventListener("click", Show, true);
                var div = document.createElement("div");
                img.setAttribute('class', 'img');
                img.setAttribute('id', 'foto' + i);
                img.setAttribute('src', data.Search[i].Poster);
                td1.setAttribute('rowspan', '9');
                td1.appendChild(img);
                tr1.appendChild(td1);
                span1.setAttribute('id', 'Type' + i);
                var text1 = document.createTextNode(data.Search[i].Type);
                span1.appendChild(text1);
                td2.appendChild(span1);
                tr2.appendChild(td2);
                span2.setAttribute('id', 'Title' + i);
                var text2 = document.createTextNode(data.Search[i].Title);
                span2.appendChild(text2);
                td3.appendChild(span2);
                tr3.appendChild(td3);
                span3.setAttribute('id', 'Year' + i);
                var text3 = document.createTextNode(data.Search[i].Year);
                span3.appendChild(text3);
                td4.appendChild(span3);
                tr4.appendChild(td4);
                input.setAttribute('type', 'button');
                input.setAttribute('name', data.Search[i].imdbID);
                input.setAttribute('id', 'btn' + i);
                input.setAttribute('class', 'btn btn-sm btn-info');
                input.setAttribute('value', 'info');
                td5.appendChild(input);
                tr5.appendChild(td5);
                tr6.appendChild(td6);
                tbody.appendChild(tr1);
                tbody.appendChild(tr2);
                tbody.appendChild(tr3);
                tbody.appendChild(tr4);
                tbody.appendChild(tr5);
                tbody.appendChild(tr6);
                table.appendChild(tbody);
                form.appendChild(table);
                div.setAttribute('class', 'col-md-2 divs');
                div.appendChild(form);
                if (i < 5) {
                    div1.appendChild(div);
                }
                else {
                    div2.appendChild(div);
                }
            }
        });
        function Show(e) {
            var elem = e ? e.target : window.event.srcElement;
            var params = new URLSearchParams({
                i: elem.name,
                apikey: '30ce141',
            }).toString();
            var url = "http://www.omdbapi.com/?".concat(params);
            $.getJSON(url, function (data) {
                var div3 = document.getElementById('div33');
                div3.setAttribute('class', 'col-md-2 divs');
                $("#Titlem").text(data.Title);
                $("#Releasedm").text(data.Released);
                $("#Genrem").text(data.Genre);
                $("#Countrym").text(data.Country);
                $("#Directorm").text(data.Director);
                $("#Writerm").text(data.Writer);
                $("#Actorsm").text(data.Actors);
                $("#Awardsm").text(data.Awards);
                $("#fotom").attr("src", data.Poster);
                $("#fotom").attr("class", 'img1');
            });
        }
        function Show3(e) {
            var elem = e ? e.target : window.event.srcElement;
            var params = new URLSearchParams({
                s: inputValue,
                type: list_Type,
                page: elem.id,
                apikey: '30ce141',
            }).toString();
            var url = "http://www.omdbapi.com/?".concat(params);
            $.getJSON(url, function (data) {
                for (var i = 0; i < 10; i++) {
                    $("#Type" + i).text(data.Search[i].Type);
                    $("#Title" + i).text(data.Search[i].Title);
                    $("#Year" + i).text(data.Search[i].Year);
                    $("#foto" + i).attr("src", data.Search[i].Poster);
                    $("#fotom").attr("class", 'img');
                    $("#btn" + i).attr("name", data.Search[i].imdbID);
                }
            });
        }
    }
});
