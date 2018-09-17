$(function () {
    let push=$(".push");
    let person=$(".list-person");
    let flag=0;
    person.click(function () {
        if (flag==0){
            flag=1;
            push.css("display","block");
            person.css("background","#F0F0F0");
            person.children().last().attr("class","iconfont icon-shangjiantou");
            return;
        }
        if (flag==1){
            flag=0;
            push.css("display","none");
            person.css("background","none");
            person.children().last().attr("class","iconfont icon-icon");
            return;
        }
    })
})