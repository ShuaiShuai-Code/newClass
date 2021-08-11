
$(document).ready(function(){
    
    var teacherAllClassUrl = url;
    teacherAllClassUrl += "teacher/getSelfCourseList";
    //加载页面
    $.ajax({

        type: "GET",
        url: teacherAllClassUrl,  //等待ing
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            "token": localStorage.token
        }),
        async: false,
        dataType: "json",
        success: function (message) {

            alert(message);
            var context = message["responseText"];
            var contextJson = JSON.parse(context);
            var code = contextJson["code"];
            alert(code);
            if (code == "1") {
                var classtable = "";

                alert("信息加载成功");
                fill(message);
            } else {
                alert("信息加载失败");
            }
        },
        error: function (message) {

            alert("未连接后端");
            alert(JSON.stringify(message));
            var dataJson = [{
                "courseId":"01",
                "courseName": "数据库",
                "courseIntroduction": "这个课很重要"
            },
                {
                    "courseId":"02",
                    "courseName": "大学生心",
                    "courseIntroduction": "这个课很搞笑"
                },
                {
                    "courseId":"03",
                    "courseName": "阿道夫",
                    "courseIntroduction": "阿道夫法国"
                },
                {
                    "courseId":"04",
                    "courseName": "士大夫",
                    "courseIntroduction": "未通过收购"
                }];
            fill(dataJson);
        }

    })

    $(".courseButton").click(function () {
        
        var courseID = $(this).attr("id");
        alert($(this).attr("id"));
        localStorage.setItem("courseId",courseID);
       
    })

    
});
function fill(message) {

    for (var i = 0; i < message.length; i++) {

        $("#classlist").append(
            "<div class=\"col-sm-6\">\n" +
            "                <section class=\"panel\">\n" +
            "                    <header class=\"panel-heading\"><a id=\""+message[i].courseId+"\" class = \"courseButton\" href=\"teacher_course_management.html\">\n" +
            "                        " + message[i].courseName + "\n" +
            "                    </a>\n" +
            "\n" +
            "                    </header>\n" +
            "                    <div class=\"panel-body\">\n" +
            "                       " + message[i].courseIntroduction + "\n" +
            "                    </div>\n" +
            "                </section>\n" +
            "                </div>"
        )
       
    }
}