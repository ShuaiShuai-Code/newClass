var signupValidator;
var forgetValidator;
var Script = function () {

    /*$.validator.setDefaults({
        submitHandler: function() { alert("submitted!"); }
    });*/

    $().ready(function() {
        // validate the comment form when it is submitted
        $("#commentForm").validate();

        // validate signup form on keyup and submit
        signupValidator=$("#signupForm").validate({
            rules: {
                username: {
                    required: true,
                },
                phone:{
                    required: true,
                    minlength: 11,
                    maxlength: 11,
                    digits: true
                },
                password: {
                    required: true,
                },
                confirm_password: {
                    required: true,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                topic: {
                    required: "#newsletter:checked",
                    minlength: 2
                },
                agree: "required",
                description: 'required'
            },
            messages: {
                username: {
                    required: "用户名不能为空！",
                },
                phone: {
                    required: "电话号码不能为空！",
                    minlength: "电话号码位数必须为11位！",
                    maxlength: "电话号码位数必须为11位！",
                    digits: "电话号码必须为数字！"
                },
                password: {
                    required: "密码不能为空！",
                },
                confirm_password: {
                    required: "确认密码不能为空！",
                    equalTo: "必须和密码一致！"
                },
                email: {
                    required: "邮箱不能为空！",
                    email: "邮箱格式错误！"
                },
                agree: "Please accept our policy",
                description: "题目描述不能为空！"
            }
        });
        forgetValidator=$("#forgetForm").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 2
                },
                phone:{
                    required: true,
                    minlength: 11,
                    maxlength: 11,
                    digits: true
                },
                password: {
                    required: true,
                },
                confirm_password: {
                    required: true,
                    equalTo: "#forget_password"
                },
                email: {
                    required: true,
                    email: true
                },
                topic: {
                    required: "#newsletter:checked",
                    minlength: 2
                },
                agree: "required",
                description: 'required',
                optionA: "required",
                optionB: "required",
                optionC: "required",
                optionD: "required"

            },
            messages: {
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                phone: {
                    required: "电话号码不能为空！",
                    minlength: "电话号码位数必须为11位！",
                    maxlength: "电话号码位数必须为11位！",
                    digits: "电话号码必须为数字！"
                },
                password: {
                    required: "密码不能为空！",
                },
                confirm_password: {
                    required: "确认密码不能为空！",
                    equalTo: "必须和密码一致！"
                },
                email: {
                    required: "邮箱不能为空！",
                    email: "邮箱格式错误！"
                },
                agree: "Please accept our policy",
                description: "题目描述不能为空！",
                optionA: "选项不能为空！",
                optionB: "选项不能为空！",
                optionC: "选项不能为空！",
                optionD: "选项不能为空！"
            }
        });

        /*
        $("#submit").click(function () {
            alert(signupValidator.form());
        })*/

        // propose username by combining first- and lastname
        $("#username").focus(function() {
            var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            if(firstname && lastname && !this.value) {
                this.value = firstname + "." + lastname;
            }
        });

        //code to hide topic selection, disable for demo
        var newsletter = $("#newsletter");
        // newsletter topics are optional, hide at first
        var inital = newsletter.is(":checked");
        var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
        var topicInputs = topics.find("input").attr("disabled", !inital);
        // show when newsletter is checked
        newsletter.click(function() {
            topics[this.checked ? "removeClass" : "addClass"]("gray");
            topicInputs.attr("disabled", !this.checked);
        });
    });


}();
